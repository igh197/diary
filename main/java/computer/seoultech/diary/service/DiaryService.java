package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.*;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.repository.ImageRepository;
import computer.seoultech.diary.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DiaryService {
    private final DiaryRepository diaryRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    public void save(DiaryRequest diaryRequest) {   //회원가입을 위한 실질적인 기능을 하는 함수
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        diaryRepository.save(Diary.builder()  //save는 JpaRepository가 내장한 함수, chain 기능 사용
                .title(diaryRequest.getTitle()) //계정 입력
                .content(diaryRequest.getContent()) //대부분의 사용자는 ROLE_USER이기 때문
                .createdAt(LocalDateTime.now())  //계정 생성 시간

                .updatedAt(LocalDateTime.now()) //update 시간은 default로 지금
                .bookmark(diaryRequest.getBookmark())
                .user(userRepository.findUserByAccount(((User) principal).getAccount()).orElseThrow())
                .build());


    }
    private DiaryResponse response(Diary diary) {   //user 객체를 UserResponse 객체로 바꾸어 주는 함수
        DiaryResponse diaryResponse =DiaryResponse.builder()
                .title(diary.getTitle())
                .bookmark(diary.getBookmark())
                .content(diary.getContent())
                .createdAt(diary.getCreatedAt())
                .updatedAt(diary.getUpdatedAt())
                .deletedAt(diary.getDeletedAt())
                .build();

        return diaryResponse;
    }
    public Header<List<DiaryResponse>> findAll(Pageable pageable) {    //diary 목록 반환 함수
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Page<Diary> diarys = diaryRepository.findAll(pageable);
        List<DiaryResponse> diaryResponseList = diarys.stream().filter(d->d.getUser().getId()==((User)principal).getId())//사용자 자신의 일기장만 볼 수 있음
                .map(diary->response(diary))// 람다 함수를 이용한 반복문 대체
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()  //user 목록 정보
                .totalPages(diarys.getTotalPages())   //전체 페이지 수
                .totalElements(diarys.getTotalElements())  //전체 diary객체 수
                .currentPage(diarys.getNumber())           //현재 페이지 번호
                .currentElements(diarys.getNumberOfElements()) //현재 페이지의 diary 객체 수
                .build();

        return Header.OK(diaryResponseList,pagination);  //반환값
    }




    public Header<DiaryResponse> update(Long id,DiaryRequest diaryRequest) {
        Optional<Diary> diaryOptional = diaryRepository.findDiaryById(id);  //업데이트 함수
        Diary nDiary = Diary.builder()
                .title(diaryRequest.getTitle())
                .content(diaryRequest.getContent())
                .bookmark(diaryRequest.getBookmark())
                .updatedAt(LocalDateTime.now())
                .build();
        diaryOptional.map(diary -> response(nDiary)).orElseThrow();
        return Header.OK(response(nDiary));
    }
    public void delete(Long id) {
        diaryRepository.deleteById(id);
    }

    public Header<List<DiaryResponse>> bookmarks(Pageable pageable) {
        Object principal2 = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Page<Diary> bookmarks = diaryRepository.findDiariesByBookmarkIsTrue(pageable);
        List<DiaryResponse> bookmarkList = bookmarks.stream().filter(p->p.getUser().getAccount()==((User)principal2).getAccount())  //stream 함수를 통한 반복문 대체
                .map(bookmark->response(bookmark))  // 람다 함수를 이용한 반복문 대체
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()  //bookmark 목록 정보
                .totalPages(bookmarks.getTotalPages())   //전체 페이지 수
                .totalElements(bookmarks.getTotalElements())  //전체 bookmark객체 수
                .currentPage(bookmarks.getNumber())           //현재 페이지 번호
                .currentElements(bookmarks.getNumberOfElements()) //현재 페이지의 bookmark 객체 수
                .build();

        return Header.OK(bookmarkList,pagination);  //반환값
    }

    public Header<DiaryResponse> diaryDetail(Long id) {

        Optional<Diary> diary = diaryRepository.findDiaryById(id);
        return Header.OK(diary.map(this::response).orElseThrow());
    }
}
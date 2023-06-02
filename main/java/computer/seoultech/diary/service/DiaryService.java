package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.*;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DiaryService {
    private final DiaryRepository diaryRepository;
    private final ImageRepository imageRepository;
    public void save(DiaryRequest diaryRequest) {   //회원가입을 위한 실질적인 기능을 하는 함수
        diaryRepository.save(Diary.builder()  //save는 JpaRepository가 내장한 함수, chain 기능 사용
                .title(diaryRequest.getTitle()) //계정 입력
                .content(diaryRequest.getContent()) //대부분의 사용자는 ROLE_USER이기 때문
                .createdAt(LocalDateTime.now())  //계정 생성 시간

                .updatedAt(LocalDateTime.now()) //update 시간은 default로 지금
                .bookmark(diaryRequest.getBookmark())

                .build());
        imageRepository.save(Image.builder()
                .originalFileName(diaryRequest.getImage().getOriginalFileName())
                .storedFilePath("diary/src/main/resources/templates/img/")
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
                .image(diary.getImageList().get(diary.getId().intValue()))
                .build();

        return diaryResponse;
    }
    public Header<List<DiaryResponse>> findAll(Pageable pageable) {    //diary 목록 반환 함수
        Page<Diary> diarys = diaryRepository.findAll(pageable);
        List<DiaryResponse> diaryResponseList = diarys.stream()  //stream 함수를 통한 반복문 대체
                .map(diary->response(diary))  // 람다 함수를 이용한 반복문 대체
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
        Optional<Diary> diaryOptional = diaryRepository.findDiaryById(id);  //
        Diary nDiary = Diary.builder()
                .title(diaryRequest.getTitle())
                .content(diaryRequest.getContent())
                .bookmark(diaryRequest.getBookmark())
                .updatedAt(LocalDateTime.now())
                .imageList(diaryRequest.getImage().getDiary().getImageList())
                .build();
        diaryOptional.map(user -> response(nDiary)).orElseThrow();
        return Header.OK(response(nDiary));
    }
    public void delete(Long id) {
        diaryRepository.deleteById(id);
    }

}
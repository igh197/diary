package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.*;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.repository.ImageRepository;
import computer.seoultech.diary.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.filters.ExpiresFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.*;
import javax.net.ssl.*;
import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class DiaryService {
    private final DiaryRepository diaryRepository;
    private final UserRepository userRepository;

    public void save(DiaryRequest diaryRequest) {   //회원가입을 위한 실질적인 기능을 하는 함수

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        diaryRepository.save(Diary.builder()  //save는 JpaRepository가 내장한 함수, chain 기능 사용
                .title(diaryRequest.getTitle()) //계정 입력
                .body(diaryRequest.getBody()) //대부분의 사용자는 ROLE_USER이기 때문
                        .tags(diaryRequest.getTags())
                .createdAt(LocalDateTime.now())  //계정 생성 시간
                        .emoji(diaryRequest.getEmoji())
                .updatedAt(LocalDateTime.now()) //update 시간은 default로 지금
                .user(userRepository.findUserById(((User) principal).getId()).orElseThrow())
                .build());

       /* WebClient webClient = WebClient.create();
        String postResponse = webClient.post()
                .uri("http://10.50.44.136:4888/")
                .bodyValue(diaryRequest.getBody())
                .retrieve()
                .bodyToMono(String.class)
                .block();

    */
    }
    private DiaryResponse response(Diary diary) {   //user 객체를 UserResponse 객체로 바꾸어 주는 함수
        DiaryResponse diaryResponse =DiaryResponse.builder()
                .title(diary.getTitle())
                .bookmark(diary.getBookmark())
                .body(diary.getBody())
                .tags(diary.getTags())
                .emoji(diary.getEmoji())
                .createdAt(diary.getCreatedAt())
                .updatedAt(diary.getUpdatedAt())
                .deletedAt(diary.getDeletedAt())
                .build();

        return diaryResponse;
    }
    public Header<List<Diary>> findAll(String account,Pageable pageable) {    //diary 목록 반환 함수

        Page<Diary> diarys = diaryRepository.findAll(pageable);
        List<Diary> diaryResponseList = diarys.stream().filter(d->d.getUser().getAccount().equals(account))//사용자 자신의 일기장만 볼 수 있음
                // 람다 함수를 이용한 반복문 대체
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()  //user 목록 정보
                .totalPages(diarys.getTotalPages())   //전체 페이지 수
                .totalElements(diarys.getTotalElements())  //전체 diary객체 수
                .currentPage(diarys.getNumber())           //현재 페이지 번호
                .currentElements(diarys.getNumberOfElements()) //현재 페이지의 diary 객체 수
                .build();

        return Header.OK(diaryResponseList,pagination);  //반환값
    }

    //반환값


    public Header<DiaryResponse> update(DiaryRequest diaryRequest,Long id) {
        Optional<Diary> diaryOptional = diaryRepository.findDiaryById(id);  //업데이트 함수
        Diary nDiary = Diary.builder()
                .title(diaryRequest.getTitle())
                .body(diaryRequest.getBody())
                .bookmark(diaryRequest.getBookmark())
                .tags(diaryRequest.getTags())
                .emoji(diaryRequest.getEmoji())
                .updatedAt(LocalDateTime.now())
                .build();
        diaryOptional.map(diary -> response(nDiary)).orElseThrow();
        return Header.OK(response(nDiary));
    }
    public void delete(Long id) {
        diaryRepository.deleteDiaryById(id);
    }


    public Header<DiaryResponse> diaryDetail(Long id) {

        Optional<Diary> diary =  diaryRepository.findDiaryById(id);  //업데이트 함수
        return Header.OK(diary.map(this::response).orElseThrow());
    }

    public String getFileToString(File sumFile,File colorFile,File backgroundFile) {


        return sumFile.toString();
    }
}
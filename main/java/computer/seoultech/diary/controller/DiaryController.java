package computer.seoultech.diary.controller;


import computer.seoultech.diary.network.DiaryRequest;
import computer.seoultech.diary.network.DiaryResponse;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.UserResponse;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/")
public class DiaryController {
    private final DiaryService diaryService;
    private final DiaryRepository diaryRepository;

    @PostMapping("/diary/new")
    public void save(@RequestBody DiaryRequest diaryRequest) {  //다이어리 생성

       diaryService.save(diaryRequest);
    }

    @GetMapping("/diarys")
    public Header<List<DiaryResponse>> getDiarys(@PageableDefault Pageable pageable){  //diary 리스트 , admin만 접근 가능
        return diaryService.findAll(pageable);        //diaryService class에 구현되어 있음
    }
    @GetMapping("/diary/{id}")
    public Header<DiaryResponse> diaryDetail(@PathVariable Long id){   //diary 1개
        return diaryService.diaryDetail(id);
    }


    @PutMapping("/diary/{id}")
    public Header<DiaryResponse> update(@RequestBody DiaryRequest diaryRequest,@PathVariable Long id) { //다이어리 수정
        return diaryService.update(id,diaryRequest);
    }
    @GetMapping("/diary/bookmarks")
    public Header<List<DiaryResponse>> bookmarks(@PageableDefault Pageable pageable){  //북마크 표시한 다이어리
        return diaryService.bookmarks(pageable);
    }


}
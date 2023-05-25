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

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class DiaryController {
    private final DiaryService diaryService;
    private final DiaryRepository diaryRepository;

    @PostMapping("/diary/new")
    public void save(@ModelAttribute DiaryRequest diaryRequest) {

       diaryService.save(diaryRequest);
    }

    @GetMapping("/diarys")
    public Header<List<DiaryResponse>> getDiarys(@PageableDefault Pageable pageable){  //user 리스트 , admin만 접근 가능
        return diaryService.findAll(pageable);        //userService class에 구현되어 있음
    }



    @PutMapping("/diary/{id}")
    public Header<DiaryResponse> update(@ModelAttribute DiaryRequest diaryRequest,@PathVariable Long id) {
        return diaryService.update(id,diaryRequest);
    }



}
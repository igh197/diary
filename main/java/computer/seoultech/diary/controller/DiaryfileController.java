package computer.seoultech.diary.controller;

import computer.seoultech.diary.entity.DiaryFile;
import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.DiaryResponse;
import computer.seoultech.diary.network.LoginDto;
import computer.seoultech.diary.service.DiaryFileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.File;

@RequiredArgsConstructor
@RestController
@RequestMapping("/")
public class DiaryfileController {
    private final DiaryFileService diaryFileService;

}

package computer.seoultech.diary.controller;

import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.ImageRequest;
import computer.seoultech.diary.network.ImageResponse;
import computer.seoultech.diary.network.UserImageDto;
import computer.seoultech.diary.service.ImageService;
import computer.seoultech.diary.service.UserImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class UserImageController {
    private final UserImageService userImageService;
    @PostMapping("/userimage/new")
    public void save(@RequestBody UserImageDto userImageDto){   //image 저장 method
        userImageService.save(userImageDto);

    }
    @PutMapping("/userimage/{id}")    //image 수정 method
    public Header<UserImageDto> update(@RequestBody UserImageDto userImageDto, @RequestParam Long id){
        return userImageService.update(userImageDto,id);
    }
}

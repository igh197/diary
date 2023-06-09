package computer.seoultech.diary.controller;

import computer.seoultech.diary.network.DiaryResponse;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.ImageRequest;
import computer.seoultech.diary.network.ImageResponse;
import computer.seoultech.diary.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/")
public class ImageController {
    private final ImageService imageService;
    @PostMapping("/image/new")
    public void save(@RequestBody ImageRequest imageRequest){   //image 저장 method
        imageService.save(imageRequest);

    }
    @PutMapping("/image/{id}")    //image 수정 method
    public Header<ImageResponse> update(@RequestBody ImageRequest imageRequest, @RequestParam Long id){
       return imageService.update(imageRequest,id);
    }
}

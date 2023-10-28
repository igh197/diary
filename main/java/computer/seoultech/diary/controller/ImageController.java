package computer.seoultech.diary.controller;

import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.ImageRequest;
import computer.seoultech.diary.network.ImageResponse;
import computer.seoultech.diary.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import java.io.File;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/")
public class ImageController {
    private final ImageService imageService;
    @PostMapping(value = "/image/new",consumes= MediaType.ALL_VALUE)
    public void save(@ModelAttribute ImageRequest imageRequest){   //image 저장 method
        imageService.save(imageRequest);

    }
    @PutMapping(value = "/image/{account}",consumes= MediaType.ALL_VALUE)   //image 수정 method
    public Header<ImageResponse> update(@ModelAttribute ImageRequest imageRequest,@PathVariable String account){
       return imageService.update(imageRequest,account);
    }
    @PostMapping(value = "/image/{account}",consumes= MediaType.ALL_VALUE)
    public Header<ImageResponse> getImage(@ModelAttribute String account){
        return imageService.getImage(account);
    }
}

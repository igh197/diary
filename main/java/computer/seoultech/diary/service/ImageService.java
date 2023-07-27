package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.DiaryResponse;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.ImageRequest;
import computer.seoultech.diary.network.ImageResponse;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;
    private final DiaryRepository diaryRepository;

    public void save(ImageRequest imageRequest) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //해당 사용자 기억
        imageRepository.save(Image.builder()
                        .originalFileName(imageRequest.getOriginalFileName())
                        .storedFilePath(imageRequest.getStoredFilePath())
                        .fileSize(imageRequest.getFileSize())
                .diary(diaryRepository.findDiaryById(((Diary) principal).getId()).orElseThrow())  //이미지 내용 저장
                .build());
    }

    public Header<ImageResponse> update(ImageRequest imageRequest, Long id) {
        Optional<Image> imageOptional = imageRepository.findImageById(id);
        Image nImage=Image.builder()
                .originalFileName(imageRequest.getOriginalFileName())
                .storedFilePath(imageRequest.getStoredFilePath())
                .fileSize(imageRequest.getFileSize())
                .build();
        imageOptional.map(image -> response(nImage)).orElseThrow();
        return Header.OK(response(nImage));

    }
    private ImageResponse response(Image image){
        ImageResponse imageResponse = ImageResponse.builder()
                .originalFileName(image.getOriginalFileName())
                .storedFilePath(image.getStoredFilePath())
                .fileSize(image.getFileSize())
                .build();
        return imageResponse;
    }
}

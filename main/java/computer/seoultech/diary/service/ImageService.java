package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.ImageRequest;
import computer.seoultech.diary.network.ImageResponse;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.repository.ImageRepository;
import computer.seoultech.diary.repository.UserImageRepository;
import computer.seoultech.diary.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;
    private final DiaryRepository diaryRepository;
    private final UserRepository userRepository;
    private final UserImageRepository userImageRepository;

    public void save(ImageRequest imageRequest) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //해당 사용자 기억
        imageRepository.save(Image.builder()
                        .originalFileName(imageRequest.getImg().getName())
                        .storedFilePath(imageRequest.getImg().getPath())
                        .fileSize(imageRequest.getImg().getTotalSpace())
                        .img(imageRequest.getImg())
                .diary(diaryRepository.findDiaryById(((Diary) principal).getId()).orElseThrow())  //이미지 내용 저장
                .build());
    }

    public Header<ImageResponse> update(ImageRequest imageRequest,String account) {
        //업데이트 함수;
        Image nImage=Image.builder()
                .originalFileName(imageRequest.getImg().getName())
                .storedFilePath(imageRequest.getImg().getPath())
                .fileSize(imageRequest.getImg().getTotalSpace())
                .img(imageRequest.getImg())
                .user(userRepository.findUserByAccount(account))
                .build();
        return Header.OK(response(nImage));

    }
    private ImageResponse response(Image image){
        ImageResponse imageResponse = ImageResponse.builder()
                .originalFileName(image.getOriginalFileName())
                .storedFilePath(image.getStoredFilePath())
                .fileSize(image.getFileSize())
                .img(image.getImg())
                .build();
        return imageResponse;
    }

    public Header<ImageResponse> getImage(String account) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Image image = imageRepository.findImageByUserAccount(account);
        return Header.OK(response(image));
    }
}

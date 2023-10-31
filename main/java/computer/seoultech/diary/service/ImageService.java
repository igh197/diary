package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.ImageRequest;
import computer.seoultech.diary.network.ImageResponse;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.repository.ImageRepository;
import computer.seoultech.diary.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.File;
import java.security.Principal;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;
    private final DiaryRepository diaryRepository;
    private final UserRepository userRepository;

    public void save(File img, Principal principal) {
         //해당 사용자 기억
        imageRepository.save(Image.builder()

                        .originalFileName(img.getName())
                        .storedFilePath(img.getPath())
                        .fileSize(img.getTotalSpace())
                        .user(userRepository.findUserByAccount(principal.getName()))
                 //이미지 내용 저장
                .build());
    }

    public Header<ImageResponse> update(ImageRequest imageRequest,String account) {
        //업데이트 함수;
        File image= new File(imageRequest.getStoredFilePath());
        Image nImage=Image.builder()
                .img(image)
                .originalFileName(image.getName())
                .storedFilePath(image.getPath())
                .fileSize(image.getTotalSpace())

                .user(userRepository.findUserByAccount(account))
                .build();
        return Header.OK(response(nImage));

    }
    private ImageResponse response(Image image){
        ImageResponse imageResponse = ImageResponse.builder()
                .img(image.getImg())
                .originalFileName(image.getOriginalFileName())
                .storedFilePath(image.getStoredFilePath())
                .fileSize(image.getFileSize())

                .build();
        return imageResponse;
    }

    public Header<ImageResponse> getImage(String account) {
        Image image = imageRepository.findImageByUserAccount(account);
        return Header.OK(response(image));
    }
}

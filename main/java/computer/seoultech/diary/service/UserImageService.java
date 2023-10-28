package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.entity.UserImage;
import computer.seoultech.diary.network.*;
import computer.seoultech.diary.repository.DiaryRepository;
import computer.seoultech.diary.repository.ImageRepository;
import computer.seoultech.diary.repository.UserImageRepository;
import computer.seoultech.diary.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserImageService {
    private final UserImageRepository userImageRepository;
    private final UserRepository userRepository;

    public void save(UserImageDto userImageDto) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //해당 사용자 기억
        userImageRepository.save(UserImage.builder()
                .originalFileName(userImageDto.getOriginalFileName())
                .storedFilePath(userImageDto.getStoredFilePath())
                .fileSize(userImageDto.getFileSize())
                .img(userImageDto.getImg())
                .user(userRepository.findUserById(((User) principal).getId()).orElseThrow())  //이미지 내용 저장
                .build());
    }

    public Header<UserImageDto> update(UserImageDto userImageDto, String account) {
        Optional<UserImage> imageOptional = userImageRepository.findUserimageById(userRepository.findUserByAccount(account).getId());  //업;
        UserImage uImage=UserImage.builder()
                .originalFileName(userImageDto.getOriginalFileName())
                .storedFilePath(userImageDto.getStoredFilePath())
                .fileSize(userImageDto.getFileSize())
                .img(userImageDto.getImg())
                .build();
        imageOptional.map(image -> response(uImage)).orElseThrow();
        return Header.OK(response(uImage));

    }
    private UserImageDto response(UserImage uImage){
        UserImageDto userImageDto = UserImageDto.builder()
                .originalFileName(uImage.getOriginalFileName())
                .storedFilePath(uImage.getStoredFilePath())
                .fileSize(uImage.getFileSize())
                .img(uImage.getImg())
                .build();
        return userImageDto;
    }


    public String userImage(String account) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<UserImage> uImage = userImageRepository.findUserimageById(userRepository.findUserByAccount(account).getId());
        String userImagePath = uImage //사용자 자신의 일기장만 볼 수 있음
                .map(image -> image.getStoredFilePath()).orElseThrow()// 람다 함수를 이용한 반복문 대체
                ;



        return userImagePath;
    }
}

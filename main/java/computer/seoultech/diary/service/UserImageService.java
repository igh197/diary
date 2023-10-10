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
                .user(userRepository.findUserById(((User) principal).getId()).orElseThrow())  //이미지 내용 저장
                .build());
    }

    public Header<UserImageDto> update(UserImageDto userImageDto, Long id) {
        Optional<UserImage> imageOptional = userImageRepository.findUserimageById(id);
        UserImage uImage=UserImage.builder()
                .originalFileName(userImageDto.getOriginalFileName())
                .storedFilePath(userImageDto.getStoredFilePath())
                .fileSize(userImageDto.getFileSize())
                .build();
        imageOptional.map(image -> response(uImage)).orElseThrow();
        return Header.OK(response(uImage));

    }
    private UserImageDto response(UserImage uImage){
        UserImageDto userImageDto = UserImageDto.builder()
                .originalFileName(uImage.getOriginalFileName())
                .storedFilePath(uImage.getStoredFilePath())
                .fileSize(uImage.getFileSize())
                .build();
        return userImageDto;
    }


    public List<String> userImage(Long id) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<UserImage> uImages = userImageRepository.findAll();
        List<String> userImagePaths = uImages.stream().filter(d->d.getUser().getId()==((User)principal).getId())//사용자 자신의 일기장만 볼 수 있음
                .map(image -> image.getStoredFilePath())// 람다 함수를 이용한 반복문 대체
                .collect(Collectors.toList());



        return userImagePaths;
    }
}

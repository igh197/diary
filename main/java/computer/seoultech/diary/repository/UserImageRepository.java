package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.UserImage;
import computer.seoultech.diary.network.UserImageDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserImageRepository extends JpaRepository<UserImage, Long> {

    Optional<UserImage> findUserimageById(Long id);

    List<UserImage> findAll();
}

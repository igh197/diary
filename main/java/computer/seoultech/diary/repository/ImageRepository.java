package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.Diary;
import computer.seoultech.diary.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image,Long> {
    Optional<Image> findImageById(Long id);
}

package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image,Long> {
}

package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.DiaryFile;
import computer.seoultech.diary.entity.UserImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryfileRepository extends JpaRepository<DiaryFile, Long> {
}

package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.Diary;

import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.DiaryResponse;
import computer.seoultech.diary.network.Header;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DiaryRepository extends JpaRepository<Diary,Long> {


    Optional<Diary> findDiaryById(Long id);
}

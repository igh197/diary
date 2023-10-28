package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.Diary;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DiaryRepository extends JpaRepository<Diary,Long> {

    Optional<Diary> findDiaryById(Long id);

    Page<Diary> findDiariesByBookmarkIsTrue(Pageable pageable);


    void deleteDiaryById(Long id);
}

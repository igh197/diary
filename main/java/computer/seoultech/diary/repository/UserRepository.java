package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {  //jpa를 이용하여 db에 접근하기 위한 인터페이스
    User findUserByAccount(String account);
    Optional<User> findUserById(Long id);
    Optional<User> deleteUserByAccount(String account);
}

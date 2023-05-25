package computer.seoultech.diary.repository;

import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.UserRequest;
import computer.seoultech.diary.network.UserResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User,Long> {  //jpa를 이용하여 db에 접근하기 위한 인터페이스
    Optional<User> findUserByAccount(String account);
    Optional<User> findUserById(Long id);
}

package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.*;
import computer.seoultech.diary.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class UserService  implements UserDetailsService {  //spring security는 반드시 UserDetailsService를 구현해야함
    private final UserRepository userRepository;  //db접근 class인 userRepository class 
    private final PasswordEncoder passwordEncoder; //비밀번호 암호화를 위한 클래스
    @Override
    public User loadUserByUsername(String account) throws UsernameNotFoundException {  //spring security 사용자 검색 함수
        return userRepository.findUserByAccount(account)
                .orElseThrow(() -> new UsernameNotFoundException((account)));
        //계정으로 사용자 정보 검사
    }

    public User save(UserRequest userRequest) {   //회원가입을 위한 실질적인 기능을 하는 함수
            return userRepository.save(User.builder()  //save는 JpaRepository가 내장한 함수, chain 기능 사용
                .account(userRequest.getAccount()) //계정 입력
                           .auth("ROLE_USER") //대부분의 사용자는 ROLE_USER이기 때문

                           .createdAt(LocalDateTime.now())  //계정 생성 시간
                           .updatedAt(LocalDateTime.now()) //update 시간은 default로 지금

                           .password(passwordEncoder.encode(userRequest.getPassword())) //비밀번호 암호화
                            //사용자 비밀번호를 암호화해서 저장
                   .build());
    }

    public Header<List<UserResponse>> search(Pageable pageable) {    //user 목록 반환 함수
        Page<User> users = userRepository.findAll(pageable);
        List<UserResponse> userResponseList = users.stream()  //stream 함수를 통한 반복문 대체
                .map(user->response(user))  // 람다 함수를 이용한 반복문 대체
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()  //user 목록 정보
                .totalPages(users.getTotalPages())   //전체 페이지 수
                .totalElements(users.getTotalElements())  //전체 user객체 수
                .currentPage(users.getNumber())           //현재 페이지 번호
                .currentElements(users.getNumberOfElements()) //현재 페이지의 user 객체 수
                .build();

        return Header.OK(userResponseList,pagination);  //반환값
    }

    private UserResponse response(User user) {   //user 객체를 UserResponse 객체로 바꾸어 주는 함수
        UserResponse userResponse = UserResponse.builder()
                .account(user.getAccount())
                .theme(user.getTheme())
                .build();

        return userResponse;
    }



    public void update(String account,UserRequest userRequest) {
        Optional<User> userOptional = userRepository.findUserByAccount(account);  //내용 수정할 사용자 찾기
        User nUser = User.builder()
                .account(userRequest.getAccount())
                .password(passwordEncoder.encode(userRequest.getPassword())) //찾아서 내용 수정
                .theme(userRequest.getTheme())
                .build();
        userOptional.map(user->response(nUser)).orElseThrow();

    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }  //사용자 탈퇴 및 개인정보 삭제

    public User login(LoginDto loginDto) {
        User user = userRepository.findUserByAccount(loginDto.getAccount()).orElseThrow();
        if(user.getPassword().equals(passwordEncoder.encode(loginDto.getPassword()))) {
            return user;
        }
        else{
            return null;
        }
    }
}

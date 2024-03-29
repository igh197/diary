package computer.seoultech.diary.service;

import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.*;
import computer.seoultech.diary.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {  //spring security는 반드시 UserDetailsService를 구현해야함
    private final UserRepository userRepository;  //db접근 class인 userRepository class 
    private final PasswordEncoder passwordEncoder; //비밀번호 암호화를 위한 클래스


    @Override
    public User loadUserByUsername(String account) throws UsernameNotFoundException {
        //spring security 사용자 검색 함수
        return userRepository.findUserByAccount(account)
                ;

        //계정으로 사용자 정보 검사
    }

    public User save(UserRequest userRequest) throws Exception {   //회원가입을 위한 실질적인 기능을 하는 함수
        List<User> userList=userRepository.findAll();
        for(int i=0;i< userList.size();i++){
            if(userList.get(i).getAccount().equals(userRequest.getAccount())){
               throw new Exception();
            }
        }
        return userRepository.save(User.builder()  //save는 JpaRepository가 내장한 함수, chain 기능 사용
                .account(userRequest.getAccount()) //계정 입력
                .auth("ROLE_USER") //대부분의 사용자는 ROLE_USER이기 때문
                        .authority("ROLE_USER")
                .createdAt(LocalDateTime.now())  //계정 생성 시간
                .updatedAt(LocalDateTime.now()) //update 시간은 default로 지금

                .password(passwordEncoder.encode(userRequest.getPassword())) //비밀번호 암호화
                //사용자 비밀번호를 암호화해서 저장
                .build());
    }


    private UserResponse response(User user) {   //user 객체를 UserResponse 객체로 바꾸어 주는 함수
        UserResponse userResponse = UserResponse.builder()
                .account(user.getAccount())
                .theme(user.getTheme())
                .build();

        return userResponse;
    }


    public void update(String account, UserRequest userRequest) {
        User user = userRepository.findUserByAccount(account);  //내용 수정할 사용자 찾기
        User nUser = User.builder()
                .account(user.getAccount())
                .password(passwordEncoder.encode(userRequest.getPassword())) //찾아서 내용 수정
                .theme(userRequest.getTheme())
                .profile(userRequest.getProfile())
                .build();
        userRepository.save(nUser);

    }

    public void delete(String account) {
        userRepository.deleteUserByAccount(account);
    }  //사용자 탈퇴 및 개인정보 삭제

    public Header<User> login(LoginDto loginDto) {

        User user = userRepository.findUserByAccount(loginDto.getAccount());
        if (Objects.equals(user.getPassword(), passwordEncoder.encode(loginDto.getPassword()))) {
            user.setAuth("ROLE_USER");
            return Header.OK(user);
        } else {
            user.setAuth(null);
            return Header.OK(user);
        }
    }
}

package computer.seoultech.diary.controller;

import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.UserRequest;
import computer.seoultech.diary.network.UserResponse;

import computer.seoultech.diary.repository.UserRepository;
import computer.seoultech.diary.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/")
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;
    @PostMapping("/user/new")
    public void userRegister(@ModelAttribute UserRequest userRequest){  //회원가입 controller
        userService.save(userRequest);  //userService class에서 구현됨

    }
    @GetMapping("/users")
    public Header<List<UserResponse>> getUsers(@PageableDefault Pageable pageable){  //user 리스트 , admin만 접근 가능
        return userService.search(pageable);        //userService class에 구현되어 있음
    }

    @GetMapping("/user/{id}")
    public Header<UserResponse> myPage(@PathVariable Long id){  //계정으로 마이페이지 찾기
        return userService.myPage(id); //userService class에 구현되어 있음
    }
    @PutMapping("/user/{id}")
    public void update(@PathVariable Long id,@ModelAttribute UserRequest userRequest){
        userService.update(id,userRequest);
    }
    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable Long id){
        userService.delete(id);
    }

}
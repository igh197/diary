package computer.seoultech.diary.controller;

import computer.seoultech.diary.entity.User;
import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.LoginDto;
import computer.seoultech.diary.network.UserRequest;
import computer.seoultech.diary.network.UserResponse;

import computer.seoultech.diary.repository.UserRepository;
import computer.seoultech.diary.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/")
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("user/new")
    public void userRegister(@RequestBody UserRequest userRequest) throws Exception {  //회원가입 controller
        userService.save(userRequest);  //userService class에서 구현됨

    }

    @PostMapping("user/{account}")
    public Header<User> getMyPage(@RequestBody LoginDto loginDto)  {
        return userService.login(loginDto);
    }


    @GetMapping("user/{account}")
    public Header<User> getMyPage2(@RequestBody LoginDto loginDto)  {
        return userService.login(loginDto);
    }


    @PutMapping("/user/{account}")
    public void update(@PathVariable String account,@RequestBody UserRequest userRequest){
        userService.update(account,userRequest);   //사용자 정보 수정
    }
    @DeleteMapping("/user/{account}")
    public void delete(@PathVariable String account){
        userService.delete(account);
    } //회원 탈퇴

}

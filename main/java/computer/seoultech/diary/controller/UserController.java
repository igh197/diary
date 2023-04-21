package computer.seoultech.diary.controller;

import computer.seoultech.diary.network.Header;
import computer.seoultech.diary.network.UserRequest;
import computer.seoultech.diary.network.UserResponse;
import computer.seoultech.diary.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    @PostMapping("/new")
    public Long userRegister(@ModelAttribute Header<UserRequest> userRequest){  //회원가입 controller
        return userService.save(userRequest);  //userService class에서 구현됨

    }

}

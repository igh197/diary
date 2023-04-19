package com.codepresso3.mirrymurry.config;


import com.codepresso3.mirrymurry.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private MemberService userDetailsService; //CustomUserDetails Class Autowired.

    @Autowired
    private PasswordEncoder passwordEncoder; //BCryptPasswordEncoder Class Autowired.

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String password = (String)authentication.getCredentials();
        User user = (User) userDetailsService.loadUserByUsername(authentication.getName());

        if(passwordEncoder.matches(password, user.getPassword()) == false) {
            System.out.println("not matches password");
            throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
        }

        UsernamePasswordAuthenticationToken ret = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword(), user.getAuthorities());
        System.out.println(ret);
        return ret;

    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}
package computer.seoultech.diary.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;


import java.util.Arrays;
@Component
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {  //WebSecurityConfigurerAdapter class는 더이상 권장되지 않아 사용하지 않았음

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    } //비밀번호 암호화 클래스


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws   //스프링 시큐리티 접근 제어 함수
            Exception {
        http.csrf().disable()
                .authorizeHttpRequests()
                //post request
                .requestMatchers(HttpMethod.POST,"/user/new").permitAll()
                .requestMatchers(HttpMethod.POST,"/diary/new","/image/new","/diaryfile/{id}").permitAll()
                //get request
                .requestMatchers(HttpMethod.GET,"/login.html").permitAll()
                .requestMatchers(HttpMethod.GET,"/diarys","/diary/{id}","/diary/bookmarks","/diaryfiles","/diaryfile/{id}").hasRole("USER")
                .requestMatchers(HttpMethod.GET,"/user/{id}","/users").hasRole("USER")
                //put request
                .requestMatchers(HttpMethod.PUT,"/diary/{id}").hasRole("USER")
                .requestMatchers(HttpMethod.PUT,"/user/{id}").hasRole("USER")
                //delete request
                .requestMatchers(HttpMethod.DELETE,"/diary/{id}").hasRole("USER")
                .requestMatchers(HttpMethod.DELETE,"/user/{id}").hasRole("USER")
                .requestMatchers(HttpMethod.DELETE,"/image/{id}").hasRole("USER")
                .anyRequest().authenticated()
                .and()

                .formLogin()
                .loginPage("/login.html")
                .usernameParameter("account") // 계정 ID
                .passwordParameter("password") //비밀번호
                .loginProcessingUrl("/login") //스프링 시큐리티가 제공하는 로그인 인증 기능
                .defaultSuccessUrl("/diary/bookmarks")
                .and().logout().invalidateHttpSession(true).logoutSuccessUrl("/")
                ;



        return http.build();
    }

}
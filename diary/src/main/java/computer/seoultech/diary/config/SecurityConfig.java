package computer.seoultech.diary.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {  //WebSecurityAdapter class는 더이상 권장되지 않아 사용하지 않았음
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    } //비밀번호 암호화 클래스


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws   //스프링 시큐리티 접근 제어 함수
            Exception {
        http.csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers(HttpMethod.GET,"/diarys").permitAll()  //diarys만 전체공개
                .requestMatchers(HttpMethod.GET,"/diarys/{id}","/diary/bookmarks").hasAuthority("ROLE_USER") // 북마크된 일기는 사용자에게만
                .requestMatchers(HttpMethod.POST,"/diary/new","/image/new","/user/new").hasAuthority("ROLE_USER") // 생성기능은 사용자에게만
                .requestMatchers(HttpMethod.PATCH).permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("")
                .usernameParameter("account") // 계정 ID
                .passwordParameter("password") //비밀번호
                .loginProcessingUrl("/login") //스프링 시큐리티가 제공하는 로그인 인증 기능
                .defaultSuccessUrl("/diarys/bookmarks") //로그인 성공시 bookmark페이지
                .and()
                .exceptionHandling()
                .accessDeniedPage("/diarys") //실패시 원래 페이지
        ;

        return http.build();
    }
}

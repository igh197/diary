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
                //get request
                .requestMatchers(HttpMethod.GET,"/diarys").permitAll()
                .requestMatchers(HttpMethod.GET,"/diary/{id}","/diary/bookmarks","/diaryfiles","/diaryfile/{id}").hasAuthority("ROLE_USER")
                .requestMatchers(HttpMethod.GET,"/user/{id}","/users").hasAuthority("ROLE_ADMIN")
                //post request
                .requestMatchers(HttpMethod.POST,"/user/new").permitAll()
                .requestMatchers(HttpMethod.POST,"/diary/new","/image/new","/diaryfile/{id}").hasAuthority("ROLE_USER")
                //put request
                .requestMatchers(HttpMethod.PUT,"/diary/{id}").hasAuthority("ROLE_USER")
                .requestMatchers(HttpMethod.PUT,"/user/{id}").hasAuthority("ROLE_USER")
                //delete request
                .requestMatchers(HttpMethod.DELETE,"/diary/{id}").hasAuthority("ROLE_USER")
                .requestMatchers(HttpMethod.DELETE,"/user/{id}").hasAuthority("ROLE_ADMIN")
                .requestMatchers(HttpMethod.DELETE,"/image/{id}").hasAuthority("ROLE_USER")

                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("")
                .usernameParameter("account") // 계정 ID
                .passwordParameter("password") //비밀번호
                .loginProcessingUrl("/login") //스프링 시큐리티가 제공하는 로그인 인증 기능
                .defaultSuccessUrl("/diary/bookmarks")
                .and()
                .exceptionHandling()
                .accessDeniedPage("/diarys")
        ;

        return http.build();
    }
}
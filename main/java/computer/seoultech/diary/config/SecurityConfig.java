package computer.seoultech.diary.config;

import computer.seoultech.diary.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.reactive.resource.PathResourceResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


import java.util.Arrays;
@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {
    private final UserRepository userRepository;  //WebSecurityConfigurerAdapter class는 더이상 권장되지 않아 사용하지 않았음

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000","http://localhost:8080/*")
                .allowedMethods("POST","GET","PUT","DELETE","OPTION")
                .allowCredentials(true);
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    } //비밀번호 암호화 클래스

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws   //스프링 시큐리티 접근 제어 함수
            Exception {
        http
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .csrf().disable()

                .authorizeHttpRequests()
                //post request

                .requestMatchers(HttpMethod.POST,"/user/new","/user","/user/{account}").permitAll()
                .requestMatchers(HttpMethod.POST,"/diary/new","/image/new","/diaryfile/{id}","userimage/{id}").permitAll()
                //get request
                .requestMatchers(HttpMethod.GET,"user/{account}","/user/{id}","/diarys/{account}","/diary/{id}","/","/diaryfiles","/diaryfile/{id}","/image/{id}","/image/{account}").permitAll()
                .requestMatchers(HttpMethod.GET,"/users").permitAll()
                //put request
                .requestMatchers(HttpMethod.PUT,"/diary/{id}","api/userimage/{id}","/image/{account}").permitAll()
                .requestMatchers(HttpMethod.PUT,"/user/{id}").hasRole("ADMIN")
                //delete request
                .requestMatchers(HttpMethod.DELETE,"/diary/{id}").permitAll()
                .requestMatchers(HttpMethod.DELETE,"/user/{id}").permitAll()
                .requestMatchers(HttpMethod.DELETE,"/image/{id}").permitAll()
                .anyRequest().permitAll()

                .and()

                .formLogin()
                .usernameParameter("account") // 계정 ID
                .passwordParameter("password") //비밀번호
                .loginProcessingUrl("/login") //스프링 시큐리티가 제공하는 로그인 인증 기능
                .defaultSuccessUrl("http://127.0.0.1:8080/")
                .permitAll();
                 http.logout()
                .logoutUrl("/logout")   // 로그아웃 처리 URL (= form action url)
                //.logoutSuccessUrl("/login") // 로그아웃 성공 후 targetUrl,
                // logoutSuccessHandler 가 있다면 효과 없으므로 주석처리.
                .addLogoutHandler((request, response, authentication) -> {
                    // 사실 굳이 내가 세션 무효화하지 않아도 됨.
                    // LogoutFilter가 내부적으로 해줌.
                    HttpSession session = request.getSession();
                    if (session != null) {
                        session.invalidate();
                    }
                })  // 로그아웃 핸들러 추가
                .logoutSuccessHandler((request, response, authentication) -> {
                    response.sendRedirect("/");
                }) // 로그아웃 성공 핸들러
                .deleteCookies("remember-me");
                ;



        return http.build();
    }

}
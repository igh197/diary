package computer.seoultech.diary.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
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
public class SecurityConfig implements WebMvcConfigurer {  //WebSecurityConfigurerAdapter class는 더이상 권장되지 않아 사용하지 않았음
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000/*","http://localhost:8080/*")
                .allowedMethods("POST","GET","PUT","DELETE","OPTION")
                .allowCredentials(true);
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOrigin("*");
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

                .requestMatchers(HttpMethod.POST,"/register","/login").permitAll()
                .requestMatchers(HttpMethod.POST,"/diary/new","/image/new","/diaryfile/{id}").hasAnyRole("USER","ADMIN")
                //get request
                .requestMatchers(HttpMethod.GET,"/diarys","/diary/{id}","/","/diaryfiles","/diaryfile/{id}").hasAnyRole("USER","ADMIN")
                .requestMatchers(HttpMethod.GET,"/login").permitAll()
                .requestMatchers(HttpMethod.GET,"/user/{id}","/users").hasRole("ADMIN")
                //put request
                .requestMatchers(HttpMethod.PUT,"/diary/{id}").hasAnyRole("USER","ADMIN")
                .requestMatchers(HttpMethod.PUT,"/user/{id}").hasRole("ADMIN")
                //delete request
                .requestMatchers(HttpMethod.DELETE,"/diary/{id}").hasAnyRole("USER","ADMIN")
                .requestMatchers(HttpMethod.DELETE,"/user/{id}").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE,"/image/{id}").hasAnyRole("USER","ADMIN")
                .anyRequest().permitAll()

                .and()

                .formLogin()
                .usernameParameter("account") // 계정 ID
                .passwordParameter("password") //비밀번호
                .loginProcessingUrl("/login") //스프링 시큐리티가 제공하는 로그인 인증 기능
                .defaultSuccessUrl("/")
                .permitAll()
                ;



        return http.build();
    }

}
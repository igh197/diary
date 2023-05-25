package computer.seoultech.diary.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@Getter
@Setter
@Entity
public class User implements UserDetails {   //UserDetails 인터페이스를 구현하는 방식으로 사용자 클래스를 생성해야함

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //mysql 사용
    private Long id; //primary key

    private String account;  //계정 아이디

    private String password; //암호화된 비밀번호

    private String name;  //사용자 이름

    private String email; //사용자 이메일

    private String auth; //사용자 권한

    @CreatedDate
    private LocalDateTime createdAt; //가입 시기

    @UpdateTimestamp
    private LocalDateTime updatedAt; //회원 내용 수정

    private LocalDateTime deletedAt;  //회원 탈퇴
    @OneToMany
    private List<Diary> diaryList;
    @OneToMany
    private List<DiaryFile> diaryFileList;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {  //권한 저장 및 호출 함수
        Set<GrantedAuthority> roles = new HashSet<>();
        for (String role : auth.split(",")) {
            roles.add(new SimpleGrantedAuthority(role));
        }
        return roles;
    }
    @Override
    public String getPassword(){
        return password;
    }   //비밀번호 호출 getter


    @Override
    public String getUsername() {
        return account;
    } //계정 호출

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

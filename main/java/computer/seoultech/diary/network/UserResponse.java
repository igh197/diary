package computer.seoultech.diary.network;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse{  //민감한 정보는 숨기기위해 이 클래스를 만듦
    private String account;  //계정 아이디

    private String password; //암호화된 비밀번호

    private String name;  //사용자 이름

    private String email; //사용자 이메일




}

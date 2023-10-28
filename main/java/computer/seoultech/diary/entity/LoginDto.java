package computer.seoultech.diary.network;

import lombok.*;
import lombok.experimental.Accessors;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@Getter
@Setter
public class LoginDto {
    private String account;  //계정 아이디

    private String password; //비밀번호
    private String auth;
}

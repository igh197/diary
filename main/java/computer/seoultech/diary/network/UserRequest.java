package computer.seoultech.diary.network;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {  //사용자가 입력해야할 정보
    private String account;  //계정 아이디

    private String password; //비밀번호

    private String name;  //사용자 이름

    private String email; //사용자 이메일
    private String auth; //사용자 권한
}

package computer.seoultech.diary.network;

import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
public class DiaryRequest {  //사용자가 입력해야할 정보

    private String title;  //일기 제목

    private String body; //일기 내용
    private String tags;

    private String emoji;
    private Boolean bookmark; //북마크 설정여부

    private LocalDateTime createdAt; // 생성 시간

    private LocalDateTime updatedAt;
    private User user;
}

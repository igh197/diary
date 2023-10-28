package computer.seoultech.diary.network;

import computer.seoultech.diary.entity.Image;
import computer.seoultech.diary.entity.User;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public class DiaryResponse {
    private String title;  //일기 제목

    private String body; //일기 내용

    private Boolean bookmark; //북마크 설정여부
    private String tags;

    private String emoji;
    private LocalDateTime createdAt; // 생성 시간


    private LocalDateTime updatedAt; //수정 시간

    private LocalDateTime deletedAt; //삭제 시간


    private Image image;
}

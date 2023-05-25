package computer.seoultech.diary.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.List;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@Getter
@Setter
@Entity
public class Diary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //mysql 사용
    private Long id;   //primary key

    private String title;  //일기 제목

    private String content; //일기 내용

    private Boolean bookmark; //북마크 설정여부
    @CreatedDate
    private LocalDateTime createdAt; // 생성 시간

    @UpdateTimestamp
    private LocalDateTime updatedAt; //수정 시간

    private LocalDateTime deletedAt; //삭제 시간
    @ManyToOne
    private User user;
    @OneToMany
    private List<Image> imageList;

}

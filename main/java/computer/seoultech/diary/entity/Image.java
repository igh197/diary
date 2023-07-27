package computer.seoultech.diary.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@Getter
@Setter
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //mysql 사용
    private Long id; //primary key

    private String originalFileName;  // 원래 파일명

    private String storedFilePath="../templates/img/"; //이미지 저장 경로

    private Long fileSize;  //이미지 파일 사이즈

    @ManyToOne
    private Diary diary;

}

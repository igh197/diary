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
public class DiaryFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //mysql 사용
    private Long id; //primary key

    private String diaryFileName;   // 생성된 일기 파일 파일명

    private String storedFilePath; //저장된 경로

    private Long fileSize;  // 파일 사이즈

    @OneToOne
    private Diary diary;
    @ManyToOne
    private User user;
}
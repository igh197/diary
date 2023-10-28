package computer.seoultech.diary.network;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.File;

@Data
@Builder
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
public class ImageResponse {
    private String originalFileName;  // 원래 파일명

    private String storedFilePath; //이미지 저장 경로
    private File img=new File("static/public/images/User/Profile.svg");
    private Long fileSize; //파일사이즈
}

package computer.seoultech.diary.network;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Header<T>{  //meta data를 Header class에 모아둠
    private LocalDateTime transactionTime;
    private String resultCode;
    private String description;
    private T data;
    private Pagination pagination;
    //OK
    public static <T> Header<T> OK(T data, Pagination pagination){
        return (Header<T>)Header
                .builder()
                .transactionTime(LocalDateTime.now())
                .resultCode("OK")
                .description("OK")
                .data(data)
                .pagination(pagination)
                .build();
    }
}

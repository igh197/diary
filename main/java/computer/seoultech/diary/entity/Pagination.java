package computer.seoultech.diary.network;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
public class Pagination {   //리스트화 된 객체들을 표시하기 위해 구현된 Pagination class
    private int totalPages;
    private Long totalElements;
    private int currentPage;
    private int currentElements;
}
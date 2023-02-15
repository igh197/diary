package com.codepresso3.mirrymurry.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BookRequestDto {
    private Integer store_id;
    private String book_date;

    public BookRequestDto(String book_date, Integer store_id) {
        this.book_date = book_date;
        this.store_id = store_id;
    }
}

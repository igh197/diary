package com.codepresso3.mirrymurry.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BookFormDto {
    private String book_date;
    private Integer book_time;
    private Integer book_menu_id;
    private Integer book_store_id;

    public BookFormDto(String book_date, Integer book_time, Integer book_menu_id, Integer book_store_id) {
        this.book_date = book_date;
        this.book_time = book_time;
        this.book_menu_id = book_menu_id;
        this.book_store_id = book_store_id;
    }
}

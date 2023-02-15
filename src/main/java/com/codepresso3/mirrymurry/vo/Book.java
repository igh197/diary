package com.codepresso3.mirrymurry.vo;

import com.codepresso3.mirrymurry.dto.BookFormDto;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Book {
    private Integer id;
    private String book_date;
    private Integer book_time;
    private Integer book_menu_id;
    private Integer book_store_id;
    private Integer book_member_id;

    public Book(Integer id, String book_date, Integer book_time, Integer book_menu_id, Integer book_store_id, Integer book_member_id) {
        this.id = id;
        this.book_date = book_date;
        this.book_time = book_time;
        this.book_menu_id = book_menu_id;
        this.book_store_id = book_store_id;
        this.book_member_id = book_member_id;
    }

    public Book(BookFormDto bookFormDto, Integer id){
        this.book_date = bookFormDto.getBook_date();
        this.book_time = bookFormDto.getBook_time();
        this.book_menu_id = bookFormDto.getBook_menu_id();
        this.book_store_id = bookFormDto.getBook_store_id();
        this.book_member_id = id;
    }
}

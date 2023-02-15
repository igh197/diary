package com.codepresso3.mirrymurry.vo;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BookMng {
    Integer book_id;
    Integer member_id;
    String email;
    String user_name;
    String phone_number;
    Integer book_time;

    public BookMng(Integer book_id, Integer member_id, String email, String user_name, String phone_number, Integer book_time) {
        this.book_id = book_id;
        this.member_id = member_id;
        this.email = email;
        this.user_name = user_name;
        this.phone_number = phone_number;
        this.book_time = book_time;
    }
}

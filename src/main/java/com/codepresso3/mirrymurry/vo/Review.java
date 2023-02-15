package com.codepresso3.mirrymurry.vo;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Review {
    private Integer id;
    private String title;
    private String content;
    private Date reg_time;
    private Integer rate;
    private Integer book_id;

    public Review(Integer id, String title, String content, Date reg_time, Integer rate, Integer book_id) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.reg_time = reg_time;
        this.rate = rate;
        this.book_id = book_id;
    }
}

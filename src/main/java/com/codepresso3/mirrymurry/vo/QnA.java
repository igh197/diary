package com.codepresso3.mirrymurry.vo;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class QnA {
    private Integer id;
    private String title;
    private String content;
    private String answer;
    private Integer secret;
    private Date que_time;
    private Date ans_time;
    private Integer member_id;
    private Integer store_id;

    public QnA(Integer id, String title, String content, String answer, Integer secret, Date que_time, Date ans_time, Integer member_id, Integer store_id) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.answer = answer;
        this.secret = secret;
        this.que_time = que_time;
        this.ans_time = ans_time;
        this.member_id = member_id;
        this.store_id = store_id;
    }
}

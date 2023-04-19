package com.codepresso3.mirrymurry.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Wish {
    private Integer id;
    private Integer member_id;
    private Integer store_id;

    public Wish(Integer id, Integer member_id, Integer store_id) {
        this.id = id;
        this.member_id = member_id;
        this.store_id = store_id;
    }

    public Wish(Integer member_id, Integer store_id) {
        this.member_id = member_id;
        this.store_id = store_id;
    }
}

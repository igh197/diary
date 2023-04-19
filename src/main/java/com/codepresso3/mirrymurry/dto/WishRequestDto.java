package com.codepresso3.mirrymurry.dto;

import com.codepresso3.mirrymurry.vo.Wish;
import lombok.Setter;

@Setter
public class WishRequestDto {
    private Integer member_id;
    private Integer store_id;

    public Wish getWish(){
        return new Wish(this.member_id, this.store_id);
    }
}

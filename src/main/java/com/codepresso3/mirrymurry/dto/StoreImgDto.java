package com.codepresso3.mirrymurry.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class StoreImgDto {
    private Integer id;

    private String imgName; //이미지 파일명

    private String oriImgName; //원본 이미지 파일명

    private String imgUrl; //이미지 조회 경로

    private String repImgYn; //대표 이미지 여부

    private Integer img_store_id;

    private List<StoreImgDto> storeImgDtoList = new ArrayList<>();

    public StoreImgDto(Integer id, String imgName, String oriImgName, String imgUrl, String repImgYn, Integer img_store_id) {
        this.id = id;
        this.imgName = imgName;
        this.oriImgName = oriImgName;
        this.imgUrl = imgUrl;
        this.repImgYn = repImgYn;
        this.img_store_id = img_store_id;
    }
}

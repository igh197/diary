package com.codepresso3.mirrymurry.mapper;

import com.codepresso3.mirrymurry.vo.StoreImg;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StoreImgMapper {
    Integer saveStoreImg(@Param("storeImg") StoreImg storeImg);

    List<StoreImg> getStoreImgList(@Param("img_store_id") Integer store_id);
}

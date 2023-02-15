package com.codepresso3.mirrymurry.mapper;

import com.codepresso3.mirrymurry.vo.Wish;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WishMapper {

    Wish wishStatus(@Param("member_id") Integer member_id, @Param("store_id") Integer store_id);
    Integer wishStore(@Param("wish") Wish wish);
    Integer unWishStore(@Param("wish") Wish wish);
}

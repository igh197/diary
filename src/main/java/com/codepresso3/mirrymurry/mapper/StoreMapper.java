package com.codepresso3.mirrymurry.mapper;

import com.codepresso3.mirrymurry.vo.BookMng;
import com.codepresso3.mirrymurry.vo.Store;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StoreMapper {

    List<BookMng> getBookMngList();
    Store findById(@Param("store_id") Integer store_id);

    Store findByMemberId(@Param("member_id") Integer member_id);

    Integer createStore(@Param("store")Store store);
}

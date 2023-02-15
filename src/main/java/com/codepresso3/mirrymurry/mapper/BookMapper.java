package com.codepresso3.mirrymurry.mapper;

import com.codepresso3.mirrymurry.vo.Book;
import com.codepresso3.mirrymurry.vo.BookMng;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BookMapper {

    List<Integer> getTimeList(@Param("book_date") String book_date, @Param("store_id") Integer store_id);

    Integer createBook(@Param("book")Book book);

    List<BookMng> bookMngList(@Param("store_id") Integer store_id, @Param("book_date") String book_date);

    Integer bookCancel(@Param("book_id") Integer book_id);

}

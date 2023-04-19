package com.codepresso3.mirrymurry.service;

import com.codepresso3.mirrymurry.dto.BookFormDto;
import com.codepresso3.mirrymurry.mapper.BookMapper;
import com.codepresso3.mirrymurry.mapper.MemberMapper;
import com.codepresso3.mirrymurry.vo.Book;
import com.codepresso3.mirrymurry.vo.BookMng;
import com.codepresso3.mirrymurry.vo.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookMapper bookMapper;
    private final MemberMapper memberMapper;

    public List<Integer> getTimeList(String book_date, Integer store_id){
        return bookMapper.getTimeList(book_date, store_id);
    }

    public boolean newBook(BookFormDto bookFormDto, Principal principal){
        Member currentMember = memberMapper.findByEmail(principal.getName());
        Book book = new Book(bookFormDto,currentMember.getId());
        Integer result = bookMapper.createBook(book);
        return result == 1;
    }

    public List<BookMng> bookMngList(Integer store_id, String bookDate){
        return bookMapper.bookMngList(store_id, bookDate);
    };

    public boolean bookCancel(Integer book_id){
        Integer result = bookMapper.bookCancel(book_id);
        return result==1;
    }
}

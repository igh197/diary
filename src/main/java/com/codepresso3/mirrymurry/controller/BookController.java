package com.codepresso3.mirrymurry.controller;

import com.codepresso3.mirrymurry.dto.BookFormDto;
import com.codepresso3.mirrymurry.dto.BookRequestDto;
import com.codepresso3.mirrymurry.mapper.MemberMapper;
import com.codepresso3.mirrymurry.mapper.StoreMapper;
import com.codepresso3.mirrymurry.service.BookService;
import com.codepresso3.mirrymurry.vo.BookMng;
import com.codepresso3.mirrymurry.vo.Member;
import com.codepresso3.mirrymurry.vo.Store;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RequestMapping("/books")
@Controller
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;
    private final MemberMapper memberMapper;
    private final StoreMapper storeMapper;

    @PostMapping("/bookDate")
    public @ResponseBody List<Integer> timeList(@RequestBody BookRequestDto bookRequestDto){
        List<Integer> timeList = bookService.getTimeList(bookRequestDto.getBook_date(), bookRequestDto.getStore_id());
        return timeList;
    }

    @PostMapping("/new")
    public @ResponseBody String newBook(@RequestBody BookFormDto bookFormDto, Principal principal){
        bookService.newBook(bookFormDto, principal);
        return "success";
    }
    @GetMapping("/bookMng")//사업자 페이지/ 예약 관리
    public String getBookMng(){
        return "store/bookMng";
    }

    @GetMapping("/bookList")//사업자 페이지/ 예약 관리/ 예약 승인
    @ResponseBody
    public List<BookMng> bookList(@RequestParam("book_date") String book_date, Principal principal) {
        Member member = memberMapper.findByEmail(principal.getName());
        Store store = storeMapper.findByMemberId(member.getId());
        List<BookMng> bookMngList = bookService.bookMngList(store.getId(), book_date);
        return bookMngList;
    }

    @GetMapping("/bookCancel")//사업자 페이지/ 예약 관리/ 예약 취소
    @ResponseBody
    public String cancelBook(@RequestParam("book_id") Integer book_id){
        bookService.bookCancel(book_id);
        return "book cancel";
    }

}

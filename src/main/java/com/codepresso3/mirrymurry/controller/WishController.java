package com.codepresso3.mirrymurry.controller;

import com.codepresso3.mirrymurry.dto.WishRequestDto;
import com.codepresso3.mirrymurry.service.WishService;
import com.codepresso3.mirrymurry.vo.Wish;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WishController {
    private final WishService wishService;

    @PostMapping("/wish")
    public String storeWish(@RequestBody WishRequestDto wishRequestDto) {
        Wish wish = wishRequestDto.getWish();
        wishService.wishStore(wish);
        return "success";
    }

    @DeleteMapping("/unWish")
    public String storeUnWish(@RequestBody WishRequestDto wishRequestDto){
        Wish wish = wishRequestDto.getWish();
        wishService.unWishStore(wish);
        return "success";
    }
}

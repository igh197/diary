package com.codepresso3.mirrymurry.service;

import com.codepresso3.mirrymurry.mapper.WishMapper;
import com.codepresso3.mirrymurry.vo.Wish;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WishService {
    private final WishMapper wishMapper;

    public Boolean wishStore(Wish wish){
        Integer result = wishMapper.wishStore(wish);
        return  result == 1;
    }

    public Boolean unWishStore(Wish wish){
        Integer result = wishMapper.unWishStore(wish);
        return  result == 1;
    }
}

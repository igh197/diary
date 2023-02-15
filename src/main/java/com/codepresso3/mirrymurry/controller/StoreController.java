package com.codepresso3.mirrymurry.controller;

import com.codepresso3.mirrymurry.mapper.MemberMapper;
import com.codepresso3.mirrymurry.mapper.MenuMapper;
import com.codepresso3.mirrymurry.mapper.StoreMapper;
import com.codepresso3.mirrymurry.mapper.WishMapper;
import com.codepresso3.mirrymurry.service.StoreImgService;
import com.codepresso3.mirrymurry.service.StoreService;
import com.codepresso3.mirrymurry.vo.Member;
import com.codepresso3.mirrymurry.vo.Menu;
import com.codepresso3.mirrymurry.vo.Store;
import com.codepresso3.mirrymurry.vo.StoreImg;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;
import java.util.List;


@RequestMapping("/stores")
@Controller
@RequiredArgsConstructor
public class StoreController {
    private final MemberMapper memberMapper;
    private final StoreMapper storeMapper;
    private final WishMapper wishMapper;
    private final MenuMapper menuMapper;

    private final StoreImgService storeImgService;
    @RequestMapping("/storeDtl/{id}")
    public String storeDtl(@PathVariable("id")Integer store_id, Model model, Principal principal){
        Store store = storeMapper.findById(store_id);
        Member member = memberMapper.findById(store.getMember_id());
        List<Menu> manMenu = menuMapper.manMenuList(store.getId());
        List<Menu> womanMenu = menuMapper.womanMenuList(store.getId());
        List<StoreImg> storeImgList = storeImgService.storeImgList(store.getId());
        store.setStoreImgList(storeImgList);

        if(principal!=null){
            Member currentMember = memberMapper.findByEmail(principal.getName());
            model.addAttribute("currentMember", currentMember);
            if(wishMapper.wishStatus(currentMember.getId(),store_id) != null){
                model.addAttribute("wishStatus", true);
            } else {
                model.addAttribute("wishStatus", false);
            }
        }
        model.addAttribute("manMenu", manMenu);
        model.addAttribute("womanMenu", womanMenu);
        model.addAttribute("store", store);
        model.addAttribute("member", member);

        return "store/storeDtl";
    }

    @RequestMapping("/storePage")
    public String storePage(){
        return "store/storePage";
    }

}

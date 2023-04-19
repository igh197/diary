package com.codepresso3.mirrymurry.controller;

import com.codepresso3.mirrymurry.dto.MenuDto;
import com.codepresso3.mirrymurry.mapper.MemberMapper;
import com.codepresso3.mirrymurry.mapper.StoreMapper;
import com.codepresso3.mirrymurry.service.MenuService;
import com.codepresso3.mirrymurry.vo.Member;
import com.codepresso3.mirrymurry.vo.Menu;
import com.codepresso3.mirrymurry.vo.Store;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/menu")
public class MenuController {

    private final MenuService menuService;
    private final MemberMapper memberMapper;
    private final StoreMapper storeMapper;

    @GetMapping("/addMenu")
    public String addMenuPage(Model model, Principal principal){
        Member currentMember = memberMapper.findByEmail(principal.getName());
        Store store = storeMapper.findByMemberId(currentMember.getId());
        model.addAttribute("store", store);
        model.addAttribute("menuDto", new MenuDto());
        return "store/addMenu";
    }

    @PostMapping("/addMenu")//사업자 페이지/ 메뉴 추가
    public String addMenu(@Valid MenuDto menuDto){
        Menu menu = new Menu(menuDto);
        menuService.addMenu(menu);
        return "store/addMenuAlert";
    }
    @GetMapping("/updateMenu/{menu_id}")
    public String updateMenuPage(@PathVariable Integer menu_id, Model model, Principal principal){
        Menu menu = menuService.getMenu(menu_id);
        Member currentMember = memberMapper.findByEmail(principal.getName());
        Store store = storeMapper.findByMemberId(currentMember.getId());
        model.addAttribute("store", store);
        model.addAttribute("menuDto", menu);
        return "store/addMenu";
    }

    @PostMapping("/updateMenu/{menu_id}")//사업자 페이지/ 메뉴 수정
    public String updateMenu(@PathVariable Integer menu_id, @Valid MenuDto menuDto){
        Menu menu = new Menu(menuDto);
        menu.setMenu_id(menu_id);
        menuService.updateMenu(menu);
        return "store/updateMenuAlert";
    }

    @GetMapping("/menuMng")//사업자 페이지/ 메뉴 관리
    public String menuMng(Model model, Principal principal){
        Member currentMember = memberMapper.findByEmail(principal.getName());
        Store store = storeMapper.findByMemberId(currentMember.getId());
        List<Menu> menuList = menuService.menuList(store.getId());
        model.addAttribute("menuList", menuList);
        return "store/menuMng";
    }

    @DeleteMapping("/deleteMenu")
    public @ResponseBody String deleteMenu(@RequestParam Integer menu_id){
        menuService.deleteMenu(menu_id);
        return "success";
    }

    @PostMapping("/price")
    public @ResponseBody String getPrice(@RequestParam Integer menu_id){
        Integer price = menuService.getPrice(menu_id);
        return price.toString();
    }
}

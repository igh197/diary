package com.codepresso3.mirrymurry.service;

import com.codepresso3.mirrymurry.mapper.MenuMapper;
import com.codepresso3.mirrymurry.vo.Menu;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    private MenuMapper menuMapper;

    public MenuService(MenuMapper menuMapper){this.menuMapper=menuMapper;}

    public boolean addMenu(Menu menu){
        Integer result = menuMapper.addMenu(menu);
        return result == 1;
    }

    public Menu getMenu(Integer menu_id){
        Menu menu = menuMapper.getMenu(menu_id);
        return menu;
    }

    public boolean updateMenu(Menu menu){
        Integer result = menuMapper.updateMenu(menu);
        return result == 1;
    }

    public List<Menu> menuList(Integer store_id){
        return menuMapper.menuList(store_id);
    }

    public boolean deleteMenu(Integer menu_id){
        Integer result = menuMapper.deleteMenu(menu_id);
        return result == 1;
    }

    public Integer getPrice(Integer menu_id){
        Integer price = menuMapper.getPrice(menu_id);
        return price;
    }

}

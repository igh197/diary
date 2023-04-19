package com.codepresso3.mirrymurry.vo;

import com.codepresso3.mirrymurry.dto.MenuDto;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Menu {
    Integer menu_id;
    Integer price;
    String menu_name;
    String category;
    Integer menu_store_id;

    public Menu(Integer menu_id, Integer price, String menu_name, String category, Integer menu_store_id) {
        this.menu_id = menu_id;
        this.price = price;
        this.menu_name = menu_name;
        this.category = category;
        this.menu_store_id = menu_store_id;
    }

    public Menu(MenuDto menuDto){
        this.price = menuDto.getPrice();
        this.menu_name = menuDto.getMenu_name();
        this.category = menuDto.getCategory();
        this.menu_store_id = menuDto.getMenu_store_id();
    }
}

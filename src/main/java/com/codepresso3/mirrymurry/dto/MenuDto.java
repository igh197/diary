package com.codepresso3.mirrymurry.dto;

import com.codepresso3.mirrymurry.vo.Menu;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MenuDto {
    Integer menu_id;
    Integer price;
    String menu_name;
    String category;
    Integer menu_store_id;

    public Menu getMenu(){
        return new Menu(this.menu_id, this.price, this.menu_name, this.category, this.menu_store_id);
    }
}

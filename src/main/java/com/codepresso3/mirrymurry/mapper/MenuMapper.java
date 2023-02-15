package com.codepresso3.mirrymurry.mapper;

import com.codepresso3.mirrymurry.vo.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MenuMapper {

    Integer addMenu(@Param("menu") Menu menu);

    Integer updateMenu(@Param("menu") Menu menu);
    Integer deleteMenu(@Param("menu_id") Integer menu_id);
    Integer getPrice(@Param("menu_id") Integer menu_id);

    List<Menu> menuList(@Param("store_id") Integer store_id);
    List<Menu> manMenuList(@Param("store_id") Integer store_id);
    List<Menu> womanMenuList(@Param("store_id") Integer store_id);

    Menu getMenu(@Param("menu_id") Integer menu_id);

}

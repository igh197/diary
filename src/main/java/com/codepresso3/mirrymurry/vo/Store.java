package com.codepresso3.mirrymurry.vo;

import com.codepresso3.mirrymurry.constant.Role;
import com.codepresso3.mirrymurry.dto.MemberFormDto;
import com.codepresso3.mirrymurry.dto.StoreFormDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
public class Store {

    private Integer id;
    private Integer member_id;
    private String store_info;
    private List<StoreImg> storeImgList = new ArrayList<>();

    public Store(Integer id, String store_info, Integer member_id) {
        this.id = id;
        this.member_id = member_id;
        this.store_info = store_info;
    }

    public Store(Integer member_id, String store_info){
        this.member_id = member_id;
        this.store_info = store_info;
    }
}

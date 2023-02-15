package com.codepresso3.mirrymurry.vo;

import com.codepresso3.mirrymurry.constant.Role;
import com.codepresso3.mirrymurry.dto.MemberFormDto;
import com.codepresso3.mirrymurry.dto.StoreFormDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter @Setter
public class Member {
    private Integer id;
    private String email;
    private String password;
    private String user_name;
    private Role role;
    private String postcode;
    private String road_address;
    private String detail_address;
    private String phone_number;

    private Double longitude;

    private Double latitude;

    public Member(Integer id, String email, String password, String user_name, Role role, String postcode, String road_address, String detail_address, String phone_number, Double longitude, Double latitude) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.user_name = user_name;
        this.role = role;
        this.postcode = postcode;
        this.road_address = road_address;
        this.detail_address = detail_address;
        this.phone_number = phone_number;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public Member(MemberFormDto memberFormDto, PasswordEncoder passwordEncoder) {
        this.email = memberFormDto.getEmail();
        this.password = passwordEncoder.encode(memberFormDto.getPassword());
        this.user_name = memberFormDto.getUser_name();
        this.phone_number = memberFormDto.getPhone_number();
        this.postcode = memberFormDto.getPostcode();
        this.road_address = memberFormDto.getRoad_address();
        this.detail_address = memberFormDto.getDetail_address();
        this.latitude = 0D;
        this.longitude = 0D;
        this.role = Role.USER;
    }

    public Member(StoreFormDto memberFormDto, PasswordEncoder passwordEncoder) {
        this.email = memberFormDto.getEmail();
        this.password = passwordEncoder.encode(memberFormDto.getPassword());
        this.user_name = memberFormDto.getUser_name();
        this.phone_number = memberFormDto.getPhone_number();
        this.postcode = memberFormDto.getPostcode();
        this.road_address = memberFormDto.getRoad_address();
        this.detail_address = memberFormDto.getDetail_address();
        this.latitude = 0D;
        this.longitude = 0D;
        this.role = Role.STORE;
    }

}

package com.codepresso3.mirrymurry.dto;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class StoreFormDto {

    @NotBlank(message = "매장명은 필수 입력 값입니다.")
    private String user_name;

    @NotBlank(message = "이메일은 필수 입력 값입니다.")
    @Email(message = "이메일 형식으로 입력해주세요.")
    private String email;

    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    @Pattern(regexp="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}",
            message = "비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.")
    private String password;

    @NotBlank(message="비밀번호를 한번 더 입력하세요")
    private String passwordCheck;

    @NotBlank(message = "우편번호는 필수 입력 값입니다.")
    private String postcode;

    @NotEmpty(message = "도로명 주소는 필수 입력 값입니다.")
    private String road_address;

    @NotEmpty(message = "상세주소는 필수 입력 값입니다.")
    private String detail_address;

    @NotBlank(message = "매장 전화번호는 필수 입력 값입니다.")
    private String phone_number;

    @NotBlank(message = "매장 소개는 필수 입력 값입니다.")
    @Length(min = 5, max = 200, message = "5자 이상 200자 이하로 입력해주세요")
    private String store_info;

    private List<StoreImgDto> storeImgDtoList = new ArrayList<>();

}

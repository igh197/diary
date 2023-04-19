package com.codepresso3.mirrymurry.mapper;

import com.codepresso3.mirrymurry.vo.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface MemberMapper {

    Member findByEmail(@Param("email") String email);
    Member findById(@Param("member_id") Integer member_id);
    Member findByPhoneNumber(@Param("phone_number") String phone_number);
    Integer createMember(@Param("member")Member member);

}

package com.codepresso3.mirrymurry.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
public class AdminController {

    @GetMapping(value = "/admin")
    public String main(){

        return "/admin/adminHome";
    }

}
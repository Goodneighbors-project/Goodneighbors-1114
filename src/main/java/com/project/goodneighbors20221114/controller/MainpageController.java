package com.project.goodneighbors20221114.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainpageController {

    @GetMapping(value = {"/", "/main", ""})
    public String mainPage(){
        return "main";
    }
}

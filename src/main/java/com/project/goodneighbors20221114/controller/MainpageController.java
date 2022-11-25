package com.project.goodneighbors20221114.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainpageController {

<<<<<<< HEAD
    @GetMapping(value = {"account","/main",""})
    public String main() {
=======
    @GetMapping(value = {"/", "/main", ""})
    public String mainPage(){
>>>>>>> SHC
        return "main";
    }
}

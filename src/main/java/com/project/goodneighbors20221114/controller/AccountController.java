package com.project.goodneighbors20221114.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.constraints.NotNull;

@Controller
public class AccountController {

    @GetMapping("/account/login")
    public String login() {

        return "account/login";
    }

    @GetMapping("/account/register")
    public String register(){
        return "account/register";
    }

    @GetMapping("/account/register_complete")
    public String registerComplete(Model model,
                                   @RequestParam String username){

        model.addAttribute("username", username);

        return "account/register_complete";
    }

}

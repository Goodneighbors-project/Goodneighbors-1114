package com.project.goodneighbors20221114.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class DonationManagementController {

    @GetMapping("/donation/register")
    public String donationRegister(){
        return "admin/donation_add";
    }

    @GetMapping("/donation/check")
    public String donationCheck(){
        return "admin/donation_check";
    }
}

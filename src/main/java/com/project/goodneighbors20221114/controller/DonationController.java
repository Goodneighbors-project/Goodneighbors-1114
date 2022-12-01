package com.project.goodneighbors20221114.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DonationController {

    @GetMapping("/payment/support_step1")
    public String getDonation() {
        return "payment/support_step1";
    }
}

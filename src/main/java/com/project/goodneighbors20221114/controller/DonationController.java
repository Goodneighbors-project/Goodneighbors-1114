package com.project.goodneighbors20221114.controller;

import com.project.goodneighbors20221114.dto.UserRespDto;
import com.project.goodneighbors20221114.security.PrincipalDetails;
import com.project.goodneighbors20221114.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DonationController {

    @GetMapping("/payment/support_step1")
    public String getDonation() {
        return "payment/support_step1";
    }

    @GetMapping("/payment/support_step2")
    public String getDonationStep2(Model model,
                                   @AuthenticationPrincipal PrincipalDetails principalDetails){
        model.addAttribute("user", principalDetails.getUser());
        return "payment/support_step2";
    }

    @GetMapping("/payment/support_step3")
    public String getDonationStep3(){
        return "payment/support_step3";
    }
}

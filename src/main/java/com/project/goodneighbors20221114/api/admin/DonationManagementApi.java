package com.project.goodneighbors20221114.api.admin;

import com.project.goodneighbors20221114.aop.annotation.LogAspect;
import com.project.goodneighbors20221114.aop.annotation.ValidAspect;
import com.project.goodneighbors20221114.dto.CMRespDto;
import com.project.goodneighbors20221114.dto.admin.DonationImageReqDto;
import com.project.goodneighbors20221114.dto.admin.DonationRegisterReqDto;
import com.project.goodneighbors20221114.service.admin.DonationManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class DonationManagementApi {

    private final DonationManagementService donationManagementService;

    @LogAspect
    @ValidAspect
    @PostMapping("/donation/register")
    public ResponseEntity<?> registerDonationMst(@Valid @RequestBody DonationRegisterReqDto donationRegisterReqDto,
                                                 BindingResult bindingResult) throws Exception{

        donationManagementService.donationRegisterMst(donationRegisterReqDto);

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("DonationRegister Successfully", true));
    }

    @GetMapping("/donation/category")
    public ResponseEntity<?> getCategoryList() throws Exception{
        return ResponseEntity.ok()
                .body(new CMRespDto<>("get Successfully", donationManagementService.getCategoryList()));
    }

    @LogAspect
    @PostMapping("/donation/img")
    public ResponseEntity<?> registerImg(DonationImageReqDto donationImageReqDto) throws Exception{

        donationManagementService.donationRegisterImg(donationImageReqDto);

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("RegisterImg Successfully", true));
    }

}

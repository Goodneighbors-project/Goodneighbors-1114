package com.project.goodneighbors20221114.api.admin;

import com.project.goodneighbors20221114.aop.annotation.LogAspect;
import com.project.goodneighbors20221114.aop.annotation.ValidAspect;
import com.project.goodneighbors20221114.dto.CMRespDto;
import com.project.goodneighbors20221114.dto.admin.DonationImgReqDto;
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
    @PostMapping("/donation")
    public ResponseEntity<?> donationCheck(@Valid @RequestBody DonationRegisterReqDto donationRegisterReqDto,
                                           BindingResult bindingResult) throws Exception {
        String donationName = donationRegisterReqDto.getDonationName();

        for(int i = 0; i < 100; i++){
            donationRegisterReqDto.setCategoryId(i / 10 + 1);
            donationRegisterReqDto.setDonationName(donationName + (i + 1));
            donationManagementService.donationRegisterMst(donationRegisterReqDto);
        }

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("Register Successfully", true));

    }

    @GetMapping("/donation/category")
    public ResponseEntity<?> getCategoryList() throws Exception{
        return ResponseEntity.ok()
                .body(new CMRespDto<>("get Successfully", donationManagementService.getCategoryList()));
    }

    @ValidAspect
    @PostMapping("/donation/register")
    public ResponseEntity<?> donationRegister(@RequestBody DonationRegisterReqDto donationRegisterReqDto,
                                                 BindingResult bindingResult) throws Exception{

        donationManagementService.donationRegisterMst(donationRegisterReqDto);

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("DonationRegister Successfully", true));
    }


    @LogAspect
    @PostMapping("/donation/img")
    public ResponseEntity<?> donationImg(DonationImgReqDto donationImgReqDto) throws Exception{

        donationManagementService.registerImg(donationImgReqDto);

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("Register Successfully", true));

    }

}

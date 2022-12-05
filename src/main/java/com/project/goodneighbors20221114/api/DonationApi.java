package com.project.goodneighbors20221114.api;

import com.project.goodneighbors20221114.dto.CMRespDto;
import com.project.goodneighbors20221114.service.DonationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class DonationApi {

    private final DonationService donationService;
    @GetMapping("/support/{category}")
    public ResponseEntity<?>  getSupports(@PathVariable String category, int page) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>("Successfully",donationService.getDonationList(category, page)));
    }
    @GetMapping("/support")
    public ResponseEntity<?> getList() throws Exception {
        return ResponseEntity.ok().body(new CMRespDto<>("success", donationService.getList()));
    }



}

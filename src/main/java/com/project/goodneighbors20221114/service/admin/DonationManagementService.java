package com.project.goodneighbors20221114.service.admin;

import com.project.goodneighbors20221114.dto.admin.CategoryResponseDto;
import com.project.goodneighbors20221114.dto.admin.DonationImageReqDto;
import com.project.goodneighbors20221114.dto.admin.DonationRegisterReqDto;

import java.util.List;

public interface DonationManagementService {

    public List<CategoryResponseDto> getCategoryList() throws Exception;
    public void donationRegisterMst(DonationRegisterReqDto donationRegisterReqDto) throws Exception;
    public void donationRegisterImg(DonationImageReqDto donationImageReqDto) throws Exception;
}

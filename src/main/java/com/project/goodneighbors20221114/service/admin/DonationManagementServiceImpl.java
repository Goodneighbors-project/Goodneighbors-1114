package com.project.goodneighbors20221114.service.admin;

import com.project.goodneighbors20221114.domain.Donation;
import com.project.goodneighbors20221114.domain.DonationImg;
import com.project.goodneighbors20221114.dto.admin.CategoryResponseDto;
import com.project.goodneighbors20221114.dto.admin.DonationRegisterReqDto;
import com.project.goodneighbors20221114.exception.CustomInternalServerErrorException;
import com.project.goodneighbors20221114.exception.CustomValidationException;
import com.project.goodneighbors20221114.repository.admin.DonationManagementRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class DonationManagementServiceImpl implements DonationManagementService{

    private final ResourceLoader resourceLoader;
    private final DonationManagementRepository donationManagementRepository;

    @Override
    public List<CategoryResponseDto> getCategoryList() throws Exception {

        List<CategoryResponseDto> categoryResponseDtos = new ArrayList<CategoryResponseDto>();

        donationManagementRepository.getCategoryList().forEach(category -> {

            categoryResponseDtos.add(category.toDto());
        });

        return categoryResponseDtos;
    }

    @Override
    public void donationRegisterMst(DonationRegisterReqDto donationRegisterReqDto) throws Exception {

        List<MultipartFile> files = donationRegisterReqDto.getFiles();
        List<DonationImg> donationImgs = null;

        Donation donation = donationRegisterReqDto.toEntity();

        if(donation.getCategory_id() == 0 || donation.getDonation_name().equals("") || donation.getDonation_contents().equals("")){

            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("register", "빈칸을 허용하지 않습니다.");
            throw new CustomValidationException("사진을 제외하고는 빈칸을 허용하지 않습니다.", errorMap);



        }


    }


}

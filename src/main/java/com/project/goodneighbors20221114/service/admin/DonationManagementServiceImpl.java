package com.project.goodneighbors20221114.service.admin;

import com.project.goodneighbors20221114.domain.DonationImg;
import com.project.goodneighbors20221114.dto.admin.CategoryResponseDto;
import com.project.goodneighbors20221114.dto.admin.DonationImageReqDto;
import com.project.goodneighbors20221114.dto.admin.DonationRegisterReqDto;
import com.project.goodneighbors20221114.exception.CustomInternalServerErrorException;
import com.project.goodneighbors20221114.exception.CustomValidationException;
import com.project.goodneighbors20221114.repository.admin.DonationManagementRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

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

        if(donationManagementRepository.saveDonationMst(donationRegisterReqDto.toEntity()) == 0){

            throw new CustomInternalServerErrorException("후원 등록 실패");
        }
    }

    @Override
    public void donationRegisterImg(DonationImageReqDto donationImageReqDto) throws Exception {

        if(donationImageReqDto.getFiles() == null){

            Map<String, String> errorMap = new HashMap<String, String>();

            errorMap.put("error", "이미지를 선택하지 않았습니다.");
            throw new CustomValidationException("image Error", errorMap);
        }


        List<DonationImg> donationImgs = new ArrayList<DonationImg>();

        donationImageReqDto.getFiles().forEach(file -> {

            Resource resource = resourceLoader.getResource("classpath:static/upload/donation");
            String filePath = null;

            try {
                if(!resource.exists()){

                    String tempPath = resourceLoader.getResource("classpath:static").getURI().toString();

                    tempPath = tempPath.substring(tempPath.indexOf("/") + 1);

                    File f = new File(tempPath + "/upload/donation");
                    f.mkdirs();
                }

                filePath = resource.getURI().toString();
                filePath = filePath.substring(filePath.indexOf("/") + 1);

                System.out.println(filePath);

            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            String origin_name = file.getOriginalFilename();
            String extension = origin_name.substring(origin_name.lastIndexOf("."));
            String save_name = UUID.randomUUID().toString().replaceAll("-", "") + extension;

            Path path = Paths.get(filePath + "/" + save_name);

            try {
                Files.write(path, file.getBytes());
            } catch (IOException e) {
                throw new CustomInternalServerErrorException(e.getMessage());
            }

            donationImgs.add(DonationImg.builder()
                            .donation_id(donationImageReqDto.getDonation_id())
                            .origin_name(origin_name)
                            .save_name(save_name)
                            .build());

        });

        donationManagementRepository.saveDonationImg(donationImgs);
    }
}

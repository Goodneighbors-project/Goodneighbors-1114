package com.project.goodneighbors20221114.dto.admin;

import com.project.goodneighbors20221114.domain.Donation;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class DonationRegisterReqDto {

    private int id;
    private int categoryId;
    private String donationName;
    private String donationContents;
    private List<MultipartFile> files;

    public Donation toEntity(){
        return Donation.builder()
                .category_id(categoryId)
                .donation_name(donationName)
                .donation_contents(donationContents)
                .build();
    }
}
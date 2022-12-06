package com.project.goodneighbors20221114.dto.admin;

import com.project.goodneighbors20221114.domain.Donation;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class DonationRegisterReqDto {

    private int id;
    private int category_id;
    private String donation_name;
    private String donation_contents;
    private List<MultipartFile> files;

    public Donation toEntity(){
        return Donation.builder()
                .category_id(category_id)
                .donation_name(donation_name)
                .donation_contents(donation_contents)
                .build();
    }
}
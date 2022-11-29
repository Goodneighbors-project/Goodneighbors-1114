package com.project.goodneighbors20221114.dto.admin;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class DonationImageReqDto {
    private int donation_id;
    private List<MultipartFile> files;
}

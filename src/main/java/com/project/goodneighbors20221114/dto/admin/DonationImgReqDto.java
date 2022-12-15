package com.project.goodneighbors20221114.dto.admin;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class DonationImgReqDto {
    private int donationId;
    private List<MultipartFile> files;

}

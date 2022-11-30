package com.project.goodneighbors20221114.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DonationListDto {
    private int categoryId;
    private String categoryName;
    private int groupId;
    private String mainImg;
}

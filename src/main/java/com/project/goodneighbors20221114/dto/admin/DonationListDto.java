package com.project.goodneighbors20221114.dto.admin;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DonationListDto {
    private int id;
    private String category_id;
    private String donation_name;
//    private String donation_contents;

}

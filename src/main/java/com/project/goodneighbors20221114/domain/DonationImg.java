package com.project.goodneighbors20221114.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DonationImg {
    private int id;
    private int donation_id;
    private String origin_name;
    private String save_name;
}

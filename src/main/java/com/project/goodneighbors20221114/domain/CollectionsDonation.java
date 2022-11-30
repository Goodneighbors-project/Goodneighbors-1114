package com.project.goodneighbors20221114.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Donation {
    private int id;
    private int category_id;
    private String donation_name;
    private String donation_contents;
    private List<DonationImg> donation_imgs;
}

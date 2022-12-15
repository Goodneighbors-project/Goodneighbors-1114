package com.project.goodneighbors20221114.domain.admin;

import com.project.goodneighbors20221114.dto.admin.DonationListDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DonationText {
    private int id;
    private String category_id;
    private String donation_name;

    public DonationListDto toDto() {
        return DonationListDto.builder()
                .id(id)
                .category_id(category_id)
                .donation_name(donation_name)
                .build();
    }

}

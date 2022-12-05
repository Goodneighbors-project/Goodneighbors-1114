package com.project.goodneighbors20221114.domain.admin;

import com.project.goodneighbors20221114.dto.DonationCategoryListDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DonationList {
    private int Id;
    private String category_name;
    private String category_design;

    public DonationCategoryListDto toDto() {
        return DonationCategoryListDto.builder()
                .categoryId(Id)
                .categoryName(category_name)
                .mainImg(category_design)
                .build();
    }
}

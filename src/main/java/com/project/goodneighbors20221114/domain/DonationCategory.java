package com.project.goodneighbors20221114.domain;

import com.project.goodneighbors20221114.dto.DonationCategoryListDto;
import com.project.goodneighbors20221114.dto.admin.CategoryResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class DonationCategory {
    private int category_id;
    private String category_name;
    private int group_id;

    public CategoryResponseDto toDto(){
        return CategoryResponseDto.builder()
                .category_id(category_id)
                .category_name(category_name)
                .group_id(group_id)
                .build();

    }

    public DonationCategoryListDto toListDto() {
        return DonationCategoryListDto.builder()
                .categoryId(category_id)
                .categoryName(category_name)
                .build();
    }
}

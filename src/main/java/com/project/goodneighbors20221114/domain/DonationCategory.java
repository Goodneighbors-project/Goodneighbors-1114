package com.project.goodneighbors20221114.domain;

import com.project.goodneighbors20221114.dto.admin.CategoryResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DonationCategory {

    private int category_id;
    private String category_name;

    public CategoryResponseDto toDto(){
        return CategoryResponseDto.builder()
                .category_id(category_id)
                .category_name(category_name)
                .build();

    }
}

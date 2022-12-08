package com.project.goodneighbors20221114.dto.admin;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryResponseDto {
    private int category_id;
    private String category_name;
    private int group_id;
}

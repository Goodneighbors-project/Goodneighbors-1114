package com.project.goodneighbors20221114.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRespDto {

    private int userId;
    private String userName;
    private String PhoneNumber;
}

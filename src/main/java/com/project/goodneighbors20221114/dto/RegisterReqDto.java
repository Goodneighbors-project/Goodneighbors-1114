package com.project.goodneighbors20221114.dto;

import com.project.goodneighbors20221114.domain.User;
import lombok.Data;

@Data
public class RegisterReqDto {
    private String username;
    private String password;
    private String passwordChk;
    private String name;
    private String email;
    private String phone;
    private String postcode;
    private String address;
    private String addressSub;

    public User toEntity() {
        return User.builder()
                .userName(username)
                .password(password)
                .name(name)
                .email(email)
                .phone(phone)
                .address(address)
                .addressSub(addressSub)
                .role_id(1)
                .build();
    }

}

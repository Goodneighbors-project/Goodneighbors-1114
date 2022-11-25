package com.project.goodneighbors20221114.dto;

import com.project.goodneighbors20221114.domain.User;
import com.project.goodneighbors20221114.dto.validation.ValidationGroups;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class RegisterReqDto {
    @NotBlank(message = "필수항목 입니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 4, max = 50, message = "최소 4자, 최대 50자 이하 입력해 주세요.", groups = ValidationGroups.SizeGroup.class)
    private String username;

    @NotBlank(message = "필수항목 입니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 10, max = 16, message = "최소 10자, 최대 16자 이하 입력해 주세요.", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$", message = "비밀번호는 특수기호, 영문, 숫자를 모두 포함하여야 합니다.", groups = ValidationGroups.PatternCheckGroup.class)
    private String password;

    @NotBlank(message = "필수항목 입니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 10, max = 16, message = "최소 10자, 최대 16자 이하 입력해 주세요.", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$", message = "비밀번호는 특수기호, 영문, 숫자를 모두 포함하여야 합니다.", groups = ValidationGroups.PatternCheckGroup.class)
    private String passwordChk;

    @NotBlank(message = "필수항목 입니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 2, max = 5, message = "최소 2자, 최대 5자 이하 입력해 주세요.", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^[가-힣]*$", message = "이름은 한글만 입력 가능합니다.", groups = ValidationGroups.PatternCheckGroup.class)
    private String name;

    // 이메일 형식
    @NotBlank(message = "필수항목 입니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Email(message = "이메일을 정확하게 입력해 주세요.", groups = ValidationGroups.PatternCheckGroup.class)
    private String email;

    @NotBlank(message = "필수항목 입니다.", groups = ValidationGroups.NotBlankGroup.class)
    private String phone;

    private String postcode;
    private String address;
    private String addressSub;

    public User toEntity() {
        return User.builder()
                .username(username)
                .password(new BCryptPasswordEncoder().encode(password))
                .name(name)
                .email(email)
                .phone(phone)
                .postcode(postcode)
                .address(address)
                .addressSub(addressSub)
                .role_id(1)
                .build();
    }

}

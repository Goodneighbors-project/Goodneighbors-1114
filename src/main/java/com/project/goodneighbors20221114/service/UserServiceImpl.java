package com.project.goodneighbors20221114.service;

import com.project.goodneighbors20221114.domain.User;
import com.project.goodneighbors20221114.dto.UserRespDto;
import com.project.goodneighbors20221114.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final AccountRepository accountRepository;

    @Override
    public UserRespDto getUser(int userId) throws Exception {
        User user = accountRepository.getUser(userId);

        Map<String, Object> userInpo = new HashMap<String, Object>();
        userInpo.put("userId", user.getId());
        userInpo.put("username", user.getUsername());
        userInpo.put("PhoneNumber", user.getPhone());

        UserRespDto dto = UserRespDto.builder()
                .userId(user.getId())
                .userName(user.getName())
                .PhoneNumber(user.getPhone())
                .build();

        return dto;
    }
}

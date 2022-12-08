package com.project.goodneighbors20221114.service;

import com.project.goodneighbors20221114.dto.UserRespDto;

public interface UserService {
    public UserRespDto getUser(int userId) throws Exception;
}

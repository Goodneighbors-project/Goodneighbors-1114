package com.project.goodneighbors20221114.service;

import com.project.goodneighbors20221114.dto.RegisterReqDto;

public interface AccountService {

    public void duplicateUsername(RegisterReqDto registerReqDto) throws Exception;

    public void passwordCheck(RegisterReqDto registerReqDto) throws Exception;

    public void register(RegisterReqDto registerReqDto) throws Exception;

}

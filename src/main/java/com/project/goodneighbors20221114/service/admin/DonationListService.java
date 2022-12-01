package com.project.goodneighbors20221114.service.admin;

import com.project.goodneighbors20221114.dto.DonationListDto;

import java.util.List;

public interface DonationListService {

    public List<DonationListDto> getList(int page) throws Exception;
}

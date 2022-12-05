package com.project.goodneighbors20221114.service;

import com.project.goodneighbors20221114.dto.DonationCategoryListDto;

import java.util.List;

public interface DonationService {
    public List<DonationCategoryListDto> getDonationList(String category, int page) throws Exception;

    public List<DonationCategoryListDto> getList()throws Exception;
}

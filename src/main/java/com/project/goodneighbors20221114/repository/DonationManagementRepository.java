package com.project.goodneighbors20221114.repository;

import com.project.goodneighbors20221114.domain.DonationCategory;

import java.util.List;

public interface DonationManagementRepository {
    public List<DonationCategory> getCategoryList() throws Exception;
}

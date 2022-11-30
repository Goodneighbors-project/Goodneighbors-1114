package com.project.goodneighbors20221114.repository.admin;

import com.project.goodneighbors20221114.domain.Donation;
import com.project.goodneighbors20221114.domain.DonationCategory;
import com.project.goodneighbors20221114.domain.DonationImg;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DonationManagementRepository {

    public List<DonationCategory> getCategoryList() throws Exception;
    public int saveDonation(Donation donation) throws Exception;
    public int saveDonationImg(List<DonationImg> donationImgs) throws Exception;
    public int deleteDonationImg(Map<String, String> map) throws Exception;
}

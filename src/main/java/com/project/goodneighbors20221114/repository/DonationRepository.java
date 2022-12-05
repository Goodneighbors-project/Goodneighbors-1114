package com.project.goodneighbors20221114.repository;

import com.project.goodneighbors20221114.domain.DonationCategory;
import com.project.goodneighbors20221114.domain.admin.DonationList;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DonationRepository {

    public List<DonationCategory> getList()throws Exception;
}

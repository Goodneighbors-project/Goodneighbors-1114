package com.project.goodneighbors20221114.repository;

import com.project.goodneighbors20221114.domain.admin.DonationList;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DonationRepository {
    public List<DonationList> getList(Map<String, Object> map) throws Exception;
}

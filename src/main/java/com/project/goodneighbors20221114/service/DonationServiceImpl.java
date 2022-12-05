package com.project.goodneighbors20221114.service;

import com.project.goodneighbors20221114.dto.DonationCategoryListDto;
import com.project.goodneighbors20221114.repository.DonationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DonationServiceImpl implements DonationService{

    private final DonationRepository donationRepository;
    @Override
    public List<DonationCategoryListDto> getDonationList(String category) throws Exception {

        List<DonationRepository> supportList = new ArrayList<DonationRepository>();

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("category", category);

        donationRepository.getList(map).forEach(donation -> {
            supportList.add(donation.toDto());
        });

        return null;
    }
}

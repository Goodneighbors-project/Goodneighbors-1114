package com.project.goodneighbors20221114.repository;

import com.project.goodneighbors20221114.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {

    public User findUserByUsername(String username) throws Exception;
    public int saveUser(User user) throws Exception;

}

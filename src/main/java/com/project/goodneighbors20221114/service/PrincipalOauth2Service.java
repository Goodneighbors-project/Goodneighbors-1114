package com.project.goodneighbors20221114.service;

import com.project.goodneighbors20221114.domain.User;
import com.project.goodneighbors20221114.repository.AccountRepository;
import com.project.goodneighbors20221114.security.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalOauth2Service extends DefaultOAuth2UserService {

    private final AccountRepository accountRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        log.info("oauth2User: {}", oAuth2User.getAttributes());
        log.info("userRequest: {}", userRequest.getClientRegistration());


        String provider = userRequest.getClientRegistration().getClientName();
        PrincipalDetails principalDetails = null;

        try {
            principalDetails = getPrincipalDetails(provider, oAuth2User.getAttributes());
        } catch (Exception e) {
            e.printStackTrace();
            throw new OAuth2AuthenticationException("login failed");
        }

        return principalDetails;
    }

    private PrincipalDetails getPrincipalDetails(String provider, Map<String, Object> attributes) throws Exception {
        User user = null;
        Map<String, Object> oauth2Attributes = null;
        String username = null;

        if (provider.equalsIgnoreCase("naver")) {
            oauth2Attributes = (Map<String, Object>) attributes.get("response");
        }else if (provider.equalsIgnoreCase("kakao")) {
            oauth2Attributes = (Map<String, Object>) attributes.get("Id");
        }

        username = (String) oauth2Attributes.get("email");

        user = accountRepository.findUserByUsername(username);

        if (user == null) {
            user = User.builder()
                    .email(username)
                    .password(new BCryptPasswordEncoder().encode(UUID.randomUUID().toString()))
                    .name((String)oauth2Attributes.get("name"))
                    .role_id(1)
                    .build();

            accountRepository.saveUser(user);
        }

        System.out.println(user);

        return new PrincipalDetails(user, oauth2Attributes);
    }
}

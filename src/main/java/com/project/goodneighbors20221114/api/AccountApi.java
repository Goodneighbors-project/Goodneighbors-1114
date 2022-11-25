package com.project.goodneighbors20221114.api;

<<<<<<< HEAD
public class AccountApi {

=======
import com.project.goodneighbors20221114.aop.annotation.LogAspect;
import com.project.goodneighbors20221114.dto.CMRespDto;
import com.project.goodneighbors20221114.dto.RegisterReqDto;
import com.project.goodneighbors20221114.dto.validation.ValidationSequence;
import com.project.goodneighbors20221114.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;


@RequestMapping("/api/account")
@RestController
@RequiredArgsConstructor
public class AccountApi {

    public final AccountService accountService;

    @LogAspect
    @PostMapping("/register")
    public ResponseEntity<?> register(@Validated(ValidationSequence.class) @RequestBody RegisterReqDto registerReqDto,
                                      BindingResult bindingResult) throws Exception{

        accountService.duplicateUsername(registerReqDto);
        accountService.passwordCheck(registerReqDto);
        accountService.register(registerReqDto);

        return ResponseEntity.created(URI.create("/account/register_complete")).body(new CMRespDto<>("회원가입 성공", registerReqDto.getUsername()));
    }

    @GetMapping("/principal")
    public ResponseEntity<?> getPrincipal(/*@AuthenticationPrincipal PrincipalDetails principalDetails*/ ) {
        return ResponseEntity.ok(new CMRespDto<>("successfully get Principal", null/*principalDetails == null ? "" : principalDetails*/));
    }
>>>>>>> SHC

}

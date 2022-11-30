/*
 nav에 마우스를 올리면 header 높이가 480으로 , 
 나가면 112.5로 변경
*/
let header = document.querySelector("header");
let mainMenuList = document.querySelectorAll(".main-menu > li");
let subMenu = document.querySelectorAll(".submenu");


function loadHeader() {
    let principal = Principal.getInstance().getPrincipal();
    console.log(principal)

    const accountList = document.querySelector(".account-list");

    if(principal == "") {
        //로그인이 안된상태
        accountList.innerHTML = `
            <li><a href="/account/login" class="header-login-btn">로그인</a></li>
            <li><a href="/account/register" class="header-register-btn">회원가입</a></li>
            <li><a class="receipt-btn" href="#">기부금 영수증</a></li>
        `;

    }else {
        //로그인 중
        accountList.innerHTML = `
            <li><a href="/logout" class="header-login-btn">로그아웃</a></li>
            <li><a href="/account/mypage" class="header-register-btn">마이페이지</a></li>
            <li><a class="receipt-btn" href="#">기부금 영수증</a></li>
        `;
    
    }
}

loadHeader();

for(var i = 0; mainMenuList.length; i++){
    mainMenuList[i].addEventListener
    
    stener('mouseover', function(){
        header.style.height = "480px"
    });

    mainMenuList[i].addEventListener('mouseout', function(){
        header.style.height = "112.5px"
    });

}


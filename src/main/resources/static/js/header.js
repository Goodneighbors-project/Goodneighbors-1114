/*
 nav에 마우스를 올리면 header 높이가 480으로 , 
 나가면 112.5로 변경
*/
let header = document.querySelector("header");
let mainMenuList = document.querySelectorAll(".main-menu > li");
let subMenu = document.querySelectorAll(".submenu");

for(var i = 0; mainMenuList.length; i++){
    mainMenuList[i].addEventListener('mouseover', function(){
        header.style.height = "480px"
    });

    mainMenuList[i].addEventListener('mouseout', function(){
        header.style.height = "112.5px"
    });

}


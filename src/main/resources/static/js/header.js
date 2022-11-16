const mainMenuList1 = document.querySelector(".main-menu > li")[0];
const menuWrapList1 = document.querySelector(".menu-wrap-list1");

mainMenuList1.onmouseover = () => {
    menuWrapList1.style.display = "block";
}


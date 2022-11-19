const loginForwardButton = document.querySelector(".btn-login");
const mainForwardButton = document.querySelector("btn-gomain");

loginForwardButton.onclick = () => {
    location.href = "/account/login";
}

mainForwardButton.onclik = () => {
    location.href = "/main";
}
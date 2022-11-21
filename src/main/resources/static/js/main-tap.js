/*
링크 클릭 시 클릭한 요소의 href속성의 값을 변수 tabTarget에 저장
저장된 값에서 #을 삭제한다.
(예시)tabTarget = #tabs-1에서 #을 삭제
document.getElementById(tabs-1).style.visibility = "visible";
*/
let originaTarget = "#tabs-1"; //#을 없애려면 a.replace("b", "c");
let targetLinks = document.querySelectorAll(".tab-area a");
let tabContents = document.querySelectorAll(".tab > div");

for(let i = 0; i < targetLinks.length; i++){
    targetLinks[i].addEventListener('click', function(e){
        let originaTarget = e.target.getAttribute("href");
        let tabTarget = originaTarget.replace("#", "");

        e.preventDefault();

        for(let j = 0; j < tabContents.length; j++){
            tabContents[j].style.visibility = "hidden";
        }

        document.getElementById(tabTarget).style.visibility = "visible";

        for(let j = 0; j < targetLinks.length; j++){
            targetLinks[j].classList.remove("active");
            e.target.classList.add("active");
        }


    });
}
document.getElementById("tabs-1").style.visibility = "visible";



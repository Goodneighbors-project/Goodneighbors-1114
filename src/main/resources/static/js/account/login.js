
class KakaoLogin {

     getkakao () {
          $.ajax({
               url: '/login/getKakaoAuthUrl',
               type: 'get',
               async: false,
               dataType: 'text',
               success: function (res) {
                    location.href = res
               }
          });
          
     }

     $(document).ready(function() {
          let kakaoInfo = '${kakaoInfo}';

          if(kakaoInfo != "") {
               let data = JSON.parse(kakaoInfo);
          }
     });

}


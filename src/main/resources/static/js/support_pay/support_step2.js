class UserApi {
  static #instance = null;
  static getInstance() {
      if(this.#instance == null) {
        this.#instance = new UserApi();
      }
      return this.#instance;
  }

  getApi() {
      let responseData = null;

      $.ajax({
          async: false,
          type: "get",
          url: "api/user",
          dataType: "json",
          success: (response) => {
              responseData = response.data;
          },
          error: (error) => {
              console.log(error);
          }
      });
      return responseData;
  }

}

class UserData {
  
  constructor() {
    const responseData = UserApi.getInstance().getApi();
    this.loadUserData(responseData);
  }

  loadUserData(responseData) {
    document.getElementById("memname1").innerHTML = responseData.userName;
    document.getElementById("phone-number").innerHTML = responseData.PhoneNumber;
  }
}

window.onload = () => {
  UserApi.getInstance().getApi();
  new UserData();
}
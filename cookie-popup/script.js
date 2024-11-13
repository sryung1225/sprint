function showPopUp() {
  window.open("popup.html", "popup", "width=300, height=150");
}

window.onload = () => {
  // 팝업에서 저장했던 쿠키가 존재하는 경우
  // 팝업을 보여 주지 않도록 해 주세요.
  if (!isCookieExist("no-popup")) {
    showPopUp();
  }
};

function setEventListeners() {
  const noPopupCheckbox = document.querySelector("#no-popup-checkbox");
  noPopupCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      // 팝업 하루동안 보지 않기 옵션이 체크된 경우
      // 해당 내용을 저장하는 쿠키를 만들어 추가합니다.
      // 하루가 지나면 쿠키가 삭제되도록 해 주세요.
      console.log("popup.js document.cookie" + document.cookie);
      setCookieWithOptions("no-popup", true, {
        expires: tomorrow,
      });
    } else {
      // 팝업 하루동안 보지 않기 옵션을 체크 해제한 경우
      // 위에서 저장했던 쿠키를 삭제해 주세요.
      console.log("popup.js document.cookie" + document.cookie);
      deleteCookie("no-popup");
    }
  });
}

setEventListeners();

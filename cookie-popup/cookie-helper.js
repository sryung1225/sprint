// 쿠키 존재 유무 확인
function isCookieExist(name) {
  return !!document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodeURIComponent(name)));
}

// 쿠키 추가
function setCookieWithOptions(name, value, options = {}) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  for (let optionKey in options) {
    let optionValue = options[optionKey];
    if (!optionValue) continue;

    cookieString += `; ${optionKey}`;
    cookieString += optionValue !== true && `= ${optionValue}`;
  }
  document.cookie = cookieString;
}

// 쿠키 삭제
function deleteCookie(name, path = "/") {
  document.cookie = `${encodeURIComponent(name)}=; Max-Age=-1; path=${path}`;
}

// 쿠키 값 가져오기
function getCookieValue(name) {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodeURIComponent(name) + "="));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

// ------ 테스트
setCookieWithOptions("language", "korea", {
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1일 후
  path: "/",
  secure: true,
  sameSite: "Strict",
});
console.log(isCookieExist("language")); // true
console.log(isCookieExist("name")); // false
console.log(getCookieValue("language")); // korea

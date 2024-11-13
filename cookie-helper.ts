// 쿠키 존재 유무 확인
function isCookieExist(name: string) {
  return !!document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodeURIComponent(name)));
}

interface CookieOptions {
  expires?: Date | string; // 만료 시간: Date 객체 또는 UTC 형식 문자열
  path?: string; // 쿠키의 유효 경로
  domain?: string; // 쿠키의 유효 도메인
  secure?: boolean; // HTTPS에서만 전송
  sameSite?: "Strict" | "Lax" | "None"; // sameSite 옵션
}

// 쿠키 추가
function setCookieWithOptions(
  name: string,
  value: string,
  options: CookieOptions = {}
) {
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
function deleteCookie(name: string, path: string = "/") {
  document.cookie = `${encodeURIComponent(name)}=; Max-Age=-1; path=${path}`;
}

// 쿠키 값 가져오기
function getCookieValue(name: string) {
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

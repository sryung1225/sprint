// 쿠키 존재 유무 확인
function isCookieExist(name: string) {
  return !!document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodeURIComponent(name)));
}

interface CookieOptions {
  expires?: number | Date; // 만료 시간 (초 단위 숫자 또는 Date 객체)
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
  if (options.expires) {
    if (typeof options.expires === "number") {
      const date = new Date();
      date.setTime(date.getTime() + options.expires * 1000); // 초 단위로 설정
      cookieString += `; expires=${date.toUTCString()}`;
    } else if (options.expires instanceof Date) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }
  }

  cookieString += `; path=${options.path || "/"}`;
  if (options.domain) cookieString += `; domain=${options.domain}`;
  if (options.secure) cookieString += `; secure`;
  if (options.sameSite) cookieString += `; samesite=${options.sameSite}`;

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
  expires: 7 * 24 * 60 * 60, // 초 단위 (7일)
  path: "/",
  secure: true,
  sameSite: "Strict",
});
console.log(isCookieExist("language")); // true
console.log(isCookieExist("name")); // false
console.log(getCookieValue("language")); // korea

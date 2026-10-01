// ============================================================
//  로그인 설정 파일  (config.js)
// ============================================================
//  이 파일만 수정하면 비밀번호를 바꿀 수 있습니다.
//  비밀번호는 평문이 아니라 SHA-256 해시로 저장합니다.
//
//  [비밀번호 바꾸는 법]
//  1) 아무 브라우저나 열고 F12(개발자도구) > Console 탭에서 아래 한 줄 실행
//       (async p => (await crypto.subtle.digest('SHA-256', new TextEncoder().encode(p)))
//         && Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',
//         new TextEncoder().encode(p)))).map(b=>b.toString(16).padStart(2,'0')).join(''))('새비밀번호')
//     -> 출력된 64자리 해시를 복사
//  2) 아래 PASSWORD_HASH 값에 붙여넣기
//
//  기본 비밀번호: dissolution2026
// ============================================================

window.APP_CONFIG = {
  // 앱 제목
  APP_TITLE: "용출률 그래프 · 유사성(f2) 분석",
  // 로그인 비밀번호(SHA-256 해시).  기본값 = "dissolution2026"
  PASSWORD_HASH: "b3d33919276d06642ae236e95d12125f14dabaa2f3127e922ee51eed313aaedc",
  // 세션 유지 시간(시간). 이 시간 동안은 다시 로그인하지 않아도 됩니다.
  SESSION_HOURS: 12
};

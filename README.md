# 🎮 Cute Jindo Dog Front-End

React 기반의 미니게임 플랫폼 (Front-End 파트) 프로젝트입니다.

---

## 📂 디렉토리 구조
```
cutejindodog-front-end/
├── node_modules/ # 설치된 라이브러리 (git에 올리지 않음)
├── public/ # 정적 리소스 (HTML, 이미지, manifest 등)
│ ├── cutejindodog.jpg # 배경 이미지
│ ├── favicon.ico 
│ ├── index.html 
│ ├── logo192.png 
│ ├── logo512.png 
│ ├── manifest.json 
│ └── robots.txt 
├── src/ # React 애플리케이션 소스 코드
│ ├── App.js # 메인 컴포넌트 (라우팅 포함)
│ ├── App.css # App.js 스타일 정의
│ ├── App.test.js # App 컴포넌트 테스트 코드
│ ├── back_App.js # (임시/백업용) App.js 대체 버전
│ ├── game-button.js # "게임 선택" 버튼 컴포넌트
│ ├── login-button.js # "로그인" 버튼 컴포넌트
│ ├── index.js 
│ ├── index.css 
│ ├── logo.svg 
│ ├── reportWebVitals.js 
│ ├── setupTests.js 
│ └── pages/                     # 라우팅되는 페이지 모음
│       ├── games/
│       │   ├── game.js          # "게임 선택" 페이지 컴포넌트
│       │   └── game.css         # "게임 선택" 페이지 전용 스타일
│       └── login/
│           ├── login.js         # "로그인" 페이지 컴포넌트
│           ├── login.css        # "로그인" 페이지 전용 스타일
│           └── sign-up/         # 회원가입 페이지
│               ├── sign.js      # "회원가입" 페이지 컴포넌트
│               └── sign.css     # "회원가입" 페이지 전용 스타일
├── package.json # 프로젝트 메타정보 & 의존성 목록
├── package-lock.json # 의존성 버전 고정 파일
└── README.md # 프로젝트 설명 문서
```

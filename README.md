# 🧸 ILB

# 배포 url

-   https://ilovebaby.shop

# 테스트 계정

-   email : test@test.com
-   pw : 123!@#qwe

# 프로젝트 소개

-   우리 프로젝트는 어쩌구 저쩌구 합니다.

# 팀원 소개

신승민
여소희
이윤구

# 역할 분담

신승민
여소희
이윤구

# 기획 배경

-   현시점 대한민국의 출산율이 홀리몰리해서
-   이러쿵 저러쿵 만들게 되었다.
-   궁극적인 목표는 출산율에 기여하여 보다 나은 삶

# 개발 환경

-   nextjs (프레임워크)
-   react (라이브러리)
-   js (개발 언어)
-   tailwind (css)

# 개발 기간

-   2024.07.29 ~ 2024.08.27

# 기술 스택

-   next.js / react / javascript / tailwind

# 플로우 차트

-   피그마 그림 가져다가 화살표 해주기?

# 폴더 구조

```
├── app
│   ├── (main)
│   │   ├── (Banner)
│   │   └── (footer)
│   ├── (products)
│   │   ├── list
│   │   │   └── (stepList)
│   │   │   └── (stepCard)
│   │   └── order
│   │   ├── complete
│   │   ├── delivery
│   │   ├── fail
│   │   └── payment
│   │   └── check
│   ├── (user)
│   │   ├── checklogin
│   │   │   └── babyinfo
│   │   ├── login
│   │   ├── mypage
│   │   │   ├── editprofile
│   │   │   ├── subscribe
│   │   │   └── updatebody
│   │   ├── signup
│   │   ├── (baby)
│   │   └── (user)
│   ├── api
│   │   ├── auth
│   │   ├── [...nextauth]
│   │   └── route.ts
│   └── globals.css
├── auth.ts
├── components
│   ├── layout
│   ├── subscribe
│   └── ui
├── data
├── hooks
├── lib
├── middleware.ts
├── types
├── util
└── zustand
```

# 주요 기능 (페이지 시연, 기능 소개)

-   메인페이지 / 캐러셀
-   헤더 스크롤
-   nav바 세션값따라
-   리스트페이지 / 세션의 정보를 보고 맞게 포커싱
-   회원가입 / validation 바로바로 체크 되게끔 하기
-   로그인 / 소셜 로그인 연동
-   마이페이지 차트, 개월수 보여주기

# 주요 코드

-   짜잔.tsx

```
export default function 짜잔() {
	유즈라우터();
	return (
		<div className='bg-white'>
			예시 컴포넌트
		</div>
	)
}
```

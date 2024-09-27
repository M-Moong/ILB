# 🧸 ILB

<img src="https://github.com/user-attachments/assets/9569b281-89cb-4380-95d6-473cf84419d4" width=100%>

<br/>
<br/>

**[ILB 바로가기]**

🔗 https://www.ilovebaby.shop

**[테스트 계정]**

&ensp;&ensp;&ensp;&ensp;&ensp; `ID` : test@test.com  
&ensp;&ensp;&ensp;&ensp;&ensp; `PassWord` : 123!@#qwe

<br/>

## 🍼 프로젝트 소개

ILB는 초보 육아러들을 위한 육아 용품 구독 서비스입니다. <br>
아기의 개월 수에 맞는 육아템들을 선별하여 정기적으로 보내드립니다. <br>
단 한 번의 구독 신청만으로 육아템에 대한 고민 없이 상품을 제공받을 수 있습니다.

<br/>

## 🖼️ 기획 배경

맞벌이 부부 증가와 바쁜 일상 속에서 많은 부모들이 출산과 육아에 대한 부담을 크게 느끼고 있습니다. 특히 초보 부모들은 아이가 태어난 후 <u>어떤 용품이 필요한지, 어떤 시기에 어떤 제품을 사용해야 하는지</u>에 대한 정보가 부족해 고민이 많습니다. 이러한 고민과 부담을 덜어주기 위해 <b>육아 용품 구독 서비스 ILB</b>를 기획하였습니다.

<br/>

## 👶🏻 팀원 소개

|                                                             **신승민**                                                              |                                                                **여소희**                                                                |                                                               **이윤구**                                                                |
| :---------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|          <img src="https://github.com/user-attachments/assets/78fe3d5c-9e8c-4b57-b23a-fc6eaae97986" height=180 width=180>           |             <img src="https://github.com/user-attachments/assets/3b6a329d-cc92-4c97-98ca-c3c94ced20da" height=180 width=180>             |            <img src="https://github.com/user-attachments/assets/708c3904-068e-447b-bef5-cd9e2580ae33" height=180 width=180>             |
| <a href="https://github.com/M-Moong"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> | <a href="https://github.com/soheeyeo"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> | <a href="https://github.com/yunkooo"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> |

<br/>
<br/>

## 🛠️ 개발 환경

  <img src="https://github.com/user-attachments/assets/f43a08b7-d8b3-4856-8dce-6eb84e958424">

<br/>
<br/>
<br/>

## 📔 폴더 구조

```
📦public
📦src
 ┣ 📂app
 ┃ ┣ 📂(main)
 ┃ ┃ ┣ 📂(Banner)
 ┃ ┃ ┗ 📂(footer)
 ┃ ┃
 ┃ ┣ 📂(products)
 ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┗ 📂(stepList)
 ┃ ┃ ┃   ┗ 📂(stepCard)
 ┃ ┃ ┃
 ┃ ┃ ┗ 📂order
 ┃ ┃ 	 ┣ 📂complete
 ┃ ┃ 	 ┣ 📂delivery
 ┃ ┃ 	 ┣ 📂fail
 ┃ ┃ 	 ┗ 📂payment
 ┃ ┃ 		 ┗ 📂check
 ┃ ┃
 ┃ ┣ 📂(user)
 ┃ ┃ ┣ 📂checklogin
 ┃ ┃ ┃ ┗ 📂babyinfo
 ┃ ┃ ┃
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📂editprofile
 ┃ ┃ ┃ ┣ 📂subscribe
 ┃ ┃ ┃ ┗ 📂updatebody
 ┃ ┃ ┃
 ┃ ┃ ┗ 📂signup
 ┃ ┃ 	 ┣ 📂(baby)
 ┃ ┃ 	 ┗ 📂(user)
 ┃ ┃
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂auth
 ┃ ┃ 	 ┗ 📂[...nextauth]
 ┃ ┃  		┗ 📜route.ts
 ┃ ┗ 📜globals.css
 ┃
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┣ 📂subscribe
 ┃ ┗ 📂ui
 ┣ 📂data
 ┃ ┗ 📂actions
 ┣ 📂hooks
 ┣ 📂lib
 ┃ ┗ 📂util
 ┣ 📂types
 ┣ 📂zustand
 ┣ 📜auth.ts
 ┗ 📜middleware.ts

```

<br/>
<br/>

## 📸 주요 기능

### 메인 페이지

> 메인 페이지에서 상품 조회 페이지, 구독신청 페이지로 이동이 가능합니다.

### 사이드바

> 사용자의 로그인 상태에 따라 사이드바 메뉴가 변경됩니다.

|                                                          **메인페이지**                                                          |                                                         **사이드 바**                                                          |
| :------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/d4c68d2e-9288-467e-acf2-ada086eab872" width="320px" height="100%" alt="" /> | <img src='https://github.com/user-attachments/assets/84018bea-1c63-44eb-9394-87d6cb3b9e2d' width='320px' height='100%' alt=''> |

<br>

### 회원가입

> 일반 회원가입 / 소셜 회원가입이 가능합니다. <br>
> 회원 정보 입력 후 아이 정보를 입력하면 회원가입이 완료됩니다.<br>

|                                                       **일반 회원 가입**                                                        |                                                       **아이 정보 입력**                                                        |                                                       **소셜 회원 가입**                                                        |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/user-attachments/assets/6e42cf8c-2a3b-4f82-8be0-89a5b4024a26' width="100%" height="100%" alt="" /> | <img src='https://github.com/user-attachments/assets/2b37d3bd-2eb9-4997-990d-50543d25a698' width="100%" height="100%" alt="" /> | <img src='https://github.com/user-attachments/assets/9704d5fa-7db9-413e-b549-3d5832e4d1c8' width="100%" height="100%" alt="" /> |

<br>

### 로그인

> 일반 로그인 / 소셜 로그인이 가능합니다.

|                                                            **로그인**                                                            |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/user-attachments/assets/5de05514-75ff-47b4-bdf3-2ea1dd74272c' width="320px" height="100%" alt="" /> |

<br/>

### 상품 리스트

> 아이의 개월 수에 맞는 상품들에 포커싱 됩니다. <br>
> 총 7개의 발달 단계에 맞춘 육아템을 조회할 수 있습니다.

### 구독하기

> 아이의 발달 특징, 개월 수에 맞는 상품 확인 후 배송 정보를 입력합니다. <br>
> 배송 정보 입력 후 결제 페이지로 이동합니다. (테스트 결제 연동)

|                                                         **상품 리스트**                                                          |                                                           **구독하기**                                                           |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/user-attachments/assets/de76b2a9-9552-4ce2-9c62-87d4bd1f5bed' width="320px" height="100%" alt="" /> | <img src='https://github.com/user-attachments/assets/6df00c5c-0ce9-472f-9747-219d643c3eca' width="320px" height="100%" alt="" /> |

<br/>

### 마이 페이지

> 아이의 신체 정보(몸무게, 키)를 입력하고 성장 과정을 그래프로 확인할 수 있습니다. <br>
> 현재 구독 중인 상품을 조회할 수 있습니다.

|                                                     **아이 신체 정보 입력**                                                      |                                                        **구독 상품 조회**                                                        |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/user-attachments/assets/25af3038-a8f6-4520-bed6-5b5ed4dda046' width="320px" height="100%" alt="" /> | <img src='https://github.com/user-attachments/assets/6df00c5c-0ce9-472f-9747-219d643c3eca' width="320px" height="100%" alt="" /> |

<br/>
<br/>
<br/>

## 📜 주요 **코드** 요약

### 📍 `useScroll Custom Hook`

헤더 컴포넌트의 스타일을 변경하기 위해 스크롤 위치를 감지하고, 해당 상태 값에 따라 스타일을 동적으로 적용하는 코드를 작성했습니다.

```ts
// hooks/useScroll.ts

'use client';

export default function useScrollPosition() {
    // 스크롤의 상태를 표시하기 위한 useState
    const [scrollPosition, setScrollPosition] = useState<boolean>(false);

    // scroll 위치에 따른 상태 관리
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrollPosition(true);
        } else {
            setScrollPosition(false);
        }
    };

    // 상태에 따라 이벤트를 등록하고 삭제한다.
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        scrollPosition,
    };
}
```

<br/>

### 📍 `react-hook-form` 라이브러리

다양한 입력을 처리하기 위해 react-hook-form을 사용했습니다. 간편하게 유효성 검사를 설정할 수 있고, 입력 값을 useState로 따로 관리할 필요 없이 편리하게 사용할 수 있었습니다.

```tsx
// (users)/signup/page.tsx

'use client';

import { emailCheck, signup } from '@/data/actions/userAction';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
...

export default function Signup() {
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false); // 중복을 확인하기 위한 상태

    const form = useForm<UserSignUpForm>({
        defaultValues: {
            name: '',
            email: '',
            ...
        },
    });

    const { formState: { isValid }, setError, clearErrors,
    } = form;

    const email = form.watch('email');

    // email Input값을 바로 API통신을 통해 중복 데이터의 경우 오류 메세지를 표출한다.
    useEffect(() => {
        const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/;

        clearErrors('email');

	// user의 입력값의 변화를 감지하여 디바운스로 API통신을 시작한다.
        const checkEmail = _.debounce(async () => {
            if (emailPattern.test(email)) {
                const res = await emailCheck(email);
		// if (성공)
		// else (실패)
            }
        }, 300);

        checkEmail();
    }, [email, setError, clearErrors]);

    // 회원가입시 formData 전송
    async function onSubmit(formData: UserSignUpForm) {
	(...객체 복사하여 필요한 데이터 전송)
        try {
            const resData = await signup(formData);
        } catch (error) {
            (...에러표시)
        }
    }

    return (
	<Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        rules={{
                            (... validation 규칙 설정)
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Input Label</FormLabel>
                                <FormControl>
                                    <Input
                                       ...
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage /> // 오류 메세지
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
            <Button type='submit'>다음</Button>
    );
}
```

<br/>
<br/>

## 💥 에러 핸들링

### 📌 `box-sizing: border-box` 적용 실패

처음에 피그마 시안에 따라 버튼의 크기를 10으로 설정하고, 패딩을 각각 45씩 주어 전체 크기를 100으로 맞추려고 했으나, border를 포함해 102가 되었습니다. 이는 <b>내부 컨텐츠에 width 값을 설정하지 않아</b> 발생한 문제였습니다. 이를 해결하기 위해 내부 컨텐츠에 width를 설정하여 border-box가 올바르게 적용되도록 수정했습니다.

<br/>

### 📌 `.next` 캐시로 인한 데이터 오류

Next.js 프로젝트를 진행하는 중, 데이터값이 변경되었음에도 한 팀원의 화면에서는 여전히 이전 데이터가 표시되는 문제가 발생했습니다. 처음에는 로직 문제로 의심했지만, 코드는 이상이 없었습니다. 조사 결과, <b>.next 폴더에서 데이터를 캐싱</b>하고 있어 문제가 발생한 것을 확인했습니다.

이를 해결하기 위해 다음과 같은 조치를 취했습니다:

1. 캐시 삭제: .next 폴더를 삭제하여 캐시 된 데이터를 제거했습니다.
2. 빌드 재실행: 프로젝트를 다시 빌드하여 최신 데이터를 반영했습니다.
3. 캐싱 전략 검토: 데이터 캐싱 전략을 검토하고, 필요에 따라 캐싱을 비활성화하거나 적절한 캐싱 정책을 설정했습니다.

이 과정을 통해 데이터가 올바르게 반영되도록 하였고, 팀원 모두가 최신 데이터를 확인할 수 있게 되었습니다.
이번 경험을 통해 캐싱 메커니즘의 중요성을 다시 한 번 깨닫게 되었고, 앞으로 유사한 문제가 발생하지 않도록 주의할 것입니다.

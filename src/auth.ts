import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const CLIENT_ID = process.env.DB_NAME;
const AUTH_SECRET = process.env.AUTH_SECRET;

// OAuth2.0
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            // email/password 로그인
            async authorize(credentials) {
                // 사용자가 입력한 정보를 이용해서 로그인 처리
                const res = await fetch(`${SERVER}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'client-id': `${CLIENT_ID}`,
                    },
                    body: JSON.stringify(credentials),
                });

                const resJson = await res.json();
                console.log('resJson', resJson);
                if (resJson.ok) {
                    const user = resJson.item;
                    console.log(user);
                    return {
                        id: user._id,
                        email: user.email,
                        name: user.name,
                        type: user.type,
                        phone: user.phone,
                        address: user.address,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                        image: user.profileImage && SERVER + user.profileImage,
                        extra: user.extra,
                        accessToken: user.token.accessToken,
                        refreshToken: user.token.refreshToken,
                    };
                } else {
                    return null;
                }
            },
        }),
        github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET,
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt', // default 'jwt'
        maxAge: 60 * 60 * 24,
    },
    pages: {
        signIn: '/login', // default '/auth/signin'
    },
    secret: AUTH_SECRET,
    callbacks: {
        // 로그인 처리를 계속 할지 여부 결정
        // true를 리턴하면 로그인 처리를 계속하고 false를 리턴하거나 Error를 throw하면 로그인 흐름을 중단
        // user: authorize()가 리턴한 값
        async signIn({ user }) {
            // user에 들어 있는 사용자 정보를 이용해서 최초에 한번은 회원 DB에 저장(회원가입)
            // 가입된 회원일 경우 자동으로 로그인 처리
            console.log('signIn.user', user);
            return true;
        },

        // 로그인 성공한 회원 정보로 token 객체 설정
        // 최초 로그인시 user 객체 전달,
        async jwt({ token, user }) {
            console.log('jwt.user', user);
            // 토큰 만료 체크, refreshToken으로 accessToken 갱신
            // refreshToken도 만료되었을 경우 로그아웃 처리
            if (user) {
                token.id = user.id;
                token.type = user.type;
                token.email = user.email;
                token.phone = user.phone;
                token.address = user.address;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
            }
            return token;
        },

        // 클라이언트에서 세션 정보 요청시 호출
        // token 객체 정보로 session 객체 설정
        async session({ session, token }) {
            console.log('session.user', session.user);
            session.user.id = token.id as string;
            session.user.type = token.type as string;
            session.user.email = token.email as string;
            session.user.phone = token.phone as string;
            session.user.address = token.address as string;
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            return session;
        },
    },
});

import { BabyInfoData } from './baby';

export interface UserData {
    _id: number;
    email: string;
    name: string;
    phone?: string;
    address?: string;
    type: 'user' | 'seller' | 'admin';
    loginType?: 'email' | 'kakao' | 'google' | 'naver';
    profileImage?: string;
    profile?: string;
    extra: {
        baby: BabyInfoData;
    };
    token?: {
        accessToken: string;
        refreshToken: string;
    };
    createdAt: string;
    updatedAt: string;
}

export type UserInToken = Required<Pick<UserData, '_id' | 'name'>> &
    Pick<UserData, 'profile'> & {
        accessToken: string;
        refreshToken: string;
    };

export type UserForm = {
    type: 'user' | 'seller';
    name: string;
    email: string;
    attach?: string | string[];
    profileImage?: string;
    password: string;
    // certificationCode: string;
};

export type SellerData = Pick<
    UserData,
    '_id' | 'email' | 'name' | 'profileImage'
>;

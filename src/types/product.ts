// export interface Product {
//     item: {
//         _id: number;
//         name: string;
//         mainImages: {
//             path: string;
//             name: string;
//             originalname: string;
//         }[];
//         category: string[];
//         content: string;
//         quantity: number;
//         seller_id: number;
//         price: number;
//         show: boolean;
//         active: boolean;
//     }[];

//     // 나중에는 seller_id가 아니라 seller 객체가 들어가야합니다.
//     // seller: SellerData;
// }

export interface Product {
    _id: number;
    name: string;
    mainImages: {
        path: string;
        name: string;
        originalname: string;
    }[];
    category: string[];
    content: string;
    quantity: number;
    seller_id: number;
    price: number;
    show: boolean;
    active: boolean;

    // 나중에는 seller_id가 아니라 seller 객체가 들어가야합니다.
    // seller: SellerData;
}

export interface Code {
    step: Step;
}

export interface Step {
    code: string;
    _id: string;
    title: string;
    codes: Codes[];
}

export interface Codes {
    code: string;
    value: string;
    description: string[];
}

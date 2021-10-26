export interface User {
    user: {
        id: string;
        name: string;
        email: string;
        email_verified: boolean;
        type: string;
        status: string;
        created_at: string;
    };
    tokens: {
        token_type: string;
        access_token: string;
        expires_in: number;
        refresh_token: string;
    };
}

export interface UserInfo {
    id: string;
    name: string;
    email: string;
    email_verified: boolean;
    type: string;
}

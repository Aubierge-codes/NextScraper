import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            loyaltyPoints: number;
            avatar: string;
        };
    }>;
    register(body: {
        name: string;
        email: string;
        password: string;
        role?: 'admin' | 'user';
    }): Promise<{
        access_token: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            loyaltyPoints: number;
            avatar: string;
        };
    }>;
    me(req: any): Promise<import("../users/user.schema").UserDocument>;
}

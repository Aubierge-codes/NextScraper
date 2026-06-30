import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../users/user.schema';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<UserDocument | null>;
    login(user: UserDocument): Promise<{
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
    register(data: {
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
}

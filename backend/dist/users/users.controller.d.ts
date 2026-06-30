import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(req: any): Promise<import("./user.schema").UserDocument>;
    updateMe(req: any, body: any): Promise<import("./user.schema").UserDocument>;
}

import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
export declare class UsersService {
    private model;
    constructor(model: Model<UserDocument>);
    create(data: Partial<User> & {
        password: string;
    }): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDocument>;
    update(id: string, data: Partial<User>): Promise<UserDocument>;
    addLoyaltyPoints(id: string, points: number): Promise<void>;
}

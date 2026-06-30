import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.schema';
export declare class RestaurantsService {
    private model;
    constructor(model: Model<RestaurantDocument>);
    findAll(params?: {
        search?: string;
        type?: string;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, RestaurantDocument, {}, import("mongoose").DefaultSchemaOptions> & Restaurant & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, RestaurantDocument, {}, import("mongoose").DefaultSchemaOptions> & Restaurant & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, RestaurantDocument, "find", {}>;
    findOne(id: string): Promise<RestaurantDocument>;
    create(data: Partial<Restaurant>): Promise<RestaurantDocument>;
    update(id: string, data: Partial<Restaurant>): Promise<RestaurantDocument>;
    remove(id: string): Promise<void>;
}

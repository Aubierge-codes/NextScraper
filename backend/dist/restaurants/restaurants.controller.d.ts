import { RestaurantsService } from './restaurants.service';
export declare class RestaurantsController {
    private readonly svc;
    constructor(svc: RestaurantsService);
    findAll(q: {
        search?: string;
        type?: string;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./restaurant.schema").RestaurantDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./restaurant.schema").Restaurant & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./restaurant.schema").RestaurantDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./restaurant.schema").Restaurant & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./restaurant.schema").RestaurantDocument, "find", {}>;
    findOne(id: string): Promise<import("./restaurant.schema").RestaurantDocument>;
    create(body: any, req: any): Promise<import("./restaurant.schema").RestaurantDocument>;
    update(id: string, body: any): Promise<import("./restaurant.schema").RestaurantDocument>;
    remove(id: string): Promise<void>;
}

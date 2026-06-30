import { Model } from 'mongoose';
import { Order, OrderDocument, OrderStatus } from './order.schema';
export declare class OrdersService {
    private model;
    constructor(model: Model<OrderDocument>);
    findAll(params?: {
        userId?: string;
        restaurantId?: string;
        status?: string;
        limit?: number;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, OrderDocument, {}, import("mongoose").DefaultSchemaOptions> & Order & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, OrderDocument, {}, import("mongoose").DefaultSchemaOptions> & Order & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, OrderDocument, "find", {}>;
    findOne(id: string): Promise<OrderDocument>;
    create(data: Partial<Order>): Promise<OrderDocument>;
    updateStatus(id: string, status: OrderStatus): Promise<OrderDocument>;
}

import { OrdersService } from './orders.service';
export declare class OrdersController {
    private svc;
    constructor(svc: OrdersService);
    findAll(q: any, req: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./order.schema").OrderDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./order.schema").Order & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./order.schema").OrderDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./order.schema").Order & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./order.schema").OrderDocument, "find", {}>;
    findOne(id: string): Promise<import("./order.schema").OrderDocument>;
    create(body: any, req: any): Promise<import("./order.schema").OrderDocument>;
    updateStatus(id: string, status: any): Promise<import("./order.schema").OrderDocument>;
}

import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './reservation.schema';
export declare class ReservationsService {
    private model;
    constructor(model: Model<ReservationDocument>);
    findAll(params?: {
        userId?: string;
        restaurantId?: string;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, ReservationDocument, {}, import("mongoose").DefaultSchemaOptions> & Reservation & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, ReservationDocument, {}, import("mongoose").DefaultSchemaOptions> & Reservation & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, ReservationDocument, "find", {}>;
    create(data: Partial<Reservation>): Promise<ReservationDocument>;
    update(id: string, data: Partial<Reservation>): Promise<ReservationDocument>;
    remove(id: string): Promise<void>;
}

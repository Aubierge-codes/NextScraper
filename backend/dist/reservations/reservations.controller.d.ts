import { ReservationsService } from './reservations.service';
export declare class ReservationsController {
    private svc;
    constructor(svc: ReservationsService);
    findAll(q: any, req: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./reservation.schema").ReservationDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./reservation.schema").Reservation & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./reservation.schema").ReservationDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./reservation.schema").Reservation & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./reservation.schema").ReservationDocument, "find", {}>;
    create(body: any, req: any): Promise<import("./reservation.schema").ReservationDocument>;
    update(id: string, body: any): Promise<import("./reservation.schema").ReservationDocument>;
    remove(id: string): Promise<void>;
}

import { Document } from 'mongoose';
export type ReservationDocument = Reservation & Document;
export declare class Reservation {
    userId: string;
    restaurantId: string;
    venue: string;
    date: string;
    time: string;
    guests: number;
    specialRequests: string;
    status: string;
}
export declare const ReservationSchema: import("mongoose").Schema<Reservation, import("mongoose").Model<Reservation, any, any, any, any, any, Reservation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reservation, Document<unknown, {}, Reservation, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: import("mongoose").SchemaDefinitionProperty<string, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    restaurantId?: import("mongoose").SchemaDefinitionProperty<string, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    venue?: import("mongoose").SchemaDefinitionProperty<string, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    date?: import("mongoose").SchemaDefinitionProperty<string, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    time?: import("mongoose").SchemaDefinitionProperty<string, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    guests?: import("mongoose").SchemaDefinitionProperty<number, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    specialRequests?: import("mongoose").SchemaDefinitionProperty<string, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    status?: import("mongoose").SchemaDefinitionProperty<string, Reservation, Document<unknown, {}, Reservation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Reservation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Reservation>;

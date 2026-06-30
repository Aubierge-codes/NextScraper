import { Document } from 'mongoose';
export type RestaurantDocument = Restaurant & Document;
export declare class Restaurant {
    name: string;
    address: string;
    phone: string;
    contactPerson: string;
    type: string;
    ownerId: string;
    isActive: boolean;
    operatingHours: Record<string, {
        open: boolean;
        from: string;
        to: string;
    }>;
    description: string;
    imageUrl: string;
    rating: number;
}
export declare const RestaurantSchema: import("mongoose").Schema<Restaurant, import("mongoose").Model<Restaurant, any, any, any, any, any, Restaurant>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Restaurant, Document<unknown, {}, Restaurant, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    address?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    contactPerson?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    type?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ownerId?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    operatingHours?: import("mongoose").SchemaDefinitionProperty<Record<string, {
        open: boolean;
        from: string;
        to: string;
    }>, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    description?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    imageUrl?: import("mongoose").SchemaDefinitionProperty<string, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    rating?: import("mongoose").SchemaDefinitionProperty<number, Restaurant, Document<unknown, {}, Restaurant, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Restaurant & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Restaurant>;

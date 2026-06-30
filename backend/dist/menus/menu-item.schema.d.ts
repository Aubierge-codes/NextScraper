import { Document } from 'mongoose';
export type MenuItemDocument = MenuItem & Document;
export declare class MenuItem {
    restaurantId: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    badge: string;
    isAvailable: boolean;
}
export declare const MenuItemSchema: import("mongoose").Schema<MenuItem, import("mongoose").Model<MenuItem, any, any, any, any, any, MenuItem>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MenuItem, Document<unknown, {}, MenuItem, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    restaurantId?: import("mongoose").SchemaDefinitionProperty<string, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: import("mongoose").SchemaDefinitionProperty<string, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    price?: import("mongoose").SchemaDefinitionProperty<number, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    description?: import("mongoose").SchemaDefinitionProperty<string, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    imageUrl?: import("mongoose").SchemaDefinitionProperty<string, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    category?: import("mongoose").SchemaDefinitionProperty<string, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    badge?: import("mongoose").SchemaDefinitionProperty<string, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isAvailable?: import("mongoose").SchemaDefinitionProperty<boolean, MenuItem, Document<unknown, {}, MenuItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MenuItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, MenuItem>;

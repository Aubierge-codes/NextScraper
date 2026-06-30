import { Model } from 'mongoose';
import { MenuItem, MenuItemDocument } from './menu-item.schema';
export declare class MenusService {
    private model;
    constructor(model: Model<MenuItemDocument>);
    getMenu(restaurantId: string, category?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, MenuItemDocument, {}, import("mongoose").DefaultSchemaOptions> & MenuItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, MenuItemDocument, {}, import("mongoose").DefaultSchemaOptions> & MenuItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, MenuItemDocument, "find", {}>;
    getItem(id: string): Promise<MenuItemDocument>;
    addItem(restaurantId: string, data: Partial<MenuItem>): Promise<MenuItemDocument>;
    updateItem(restaurantId: string, id: string, data: Partial<MenuItem>): Promise<MenuItemDocument>;
    deleteItem(restaurantId: string, id: string): Promise<void>;
}

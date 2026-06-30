import { MenusService } from './menus.service';
export declare class MenusController {
    private svc;
    constructor(svc: MenusService);
    getMenu(rid: string, cat?: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./menu-item.schema").MenuItemDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./menu-item.schema").MenuItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./menu-item.schema").MenuItemDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./menu-item.schema").MenuItem & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./menu-item.schema").MenuItemDocument, "find", {}>;
    addItem(rid: string, body: any): Promise<import("./menu-item.schema").MenuItemDocument>;
    updateItem(rid: string, id: string, body: any): Promise<import("./menu-item.schema").MenuItemDocument>;
    deleteItem(rid: string, id: string): Promise<void>;
}

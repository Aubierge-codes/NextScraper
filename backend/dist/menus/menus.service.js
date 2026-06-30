"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const menu_item_schema_1 = require("./menu-item.schema");
let MenusService = class MenusService {
    constructor(model) {
        this.model = model;
    }
    getMenu(restaurantId, category) {
        const filter = { restaurantId, isAvailable: true };
        if (category)
            filter.category = category;
        return this.model.find(filter).sort({ category: 1, name: 1 });
    }
    async getItem(id) {
        const item = await this.model.findById(id);
        if (!item)
            throw new common_1.NotFoundException('Menu item not found');
        return item;
    }
    addItem(restaurantId, data) {
        return this.model.create({ ...data, restaurantId });
    }
    async updateItem(restaurantId, id, data) {
        const item = await this.model.findOneAndUpdate({ _id: id, restaurantId }, data, { new: true });
        if (!item)
            throw new common_1.NotFoundException('Menu item not found');
        return item;
    }
    async deleteItem(restaurantId, id) {
        await this.model.findOneAndUpdate({ _id: id, restaurantId }, { isAvailable: false });
    }
};
exports.MenusService = MenusService;
exports.MenusService = MenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(menu_item_schema_1.MenuItem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MenusService);
//# sourceMappingURL=menus.service.js.map
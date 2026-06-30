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
exports.RestaurantsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const restaurant_schema_1 = require("./restaurant.schema");
let RestaurantsService = class RestaurantsService {
    constructor(model) {
        this.model = model;
    }
    findAll(params) {
        const filter = { isActive: true };
        if (params?.search)
            filter.name = { $regex: params.search, $options: 'i' };
        if (params?.type)
            filter.type = params.type;
        return this.model.find(filter).sort({ rating: -1 });
    }
    async findOne(id) {
        const r = await this.model.findById(id);
        if (!r)
            throw new common_1.NotFoundException('Restaurant not found');
        return r;
    }
    create(data) {
        return this.model.create(data);
    }
    async update(id, data) {
        const r = await this.model.findByIdAndUpdate(id, data, { new: true });
        if (!r)
            throw new common_1.NotFoundException('Restaurant not found');
        return r;
    }
    async remove(id) {
        await this.model.findByIdAndUpdate(id, { isActive: false });
    }
};
exports.RestaurantsService = RestaurantsService;
exports.RestaurantsService = RestaurantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(restaurant_schema_1.Restaurant.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RestaurantsService);
//# sourceMappingURL=restaurants.service.js.map
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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("./order.schema");
let OrdersService = class OrdersService {
    constructor(model) {
        this.model = model;
    }
    findAll(params) {
        const filter = {};
        if (params?.userId)
            filter.userId = params.userId;
        if (params?.restaurantId)
            filter.restaurantId = params.restaurantId;
        if (params?.status)
            filter.status = params.status;
        const query = this.model.find(filter).sort({ createdAt: -1 });
        if (params?.limit)
            query.limit(params.limit);
        return query;
    }
    async findOne(id) {
        const o = await this.model.findById(id);
        if (!o)
            throw new common_1.NotFoundException('Order not found');
        return o;
    }
    create(data) {
        return this.model.create(data);
    }
    async updateStatus(id, status) {
        const o = await this.model.findByIdAndUpdate(id, { status }, { new: true });
        if (!o)
            throw new common_1.NotFoundException('Order not found');
        return o;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersService);
//# sourceMappingURL=orders.service.js.map
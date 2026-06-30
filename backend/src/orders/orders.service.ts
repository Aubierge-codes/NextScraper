import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument, OrderStatus } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private model: Model<OrderDocument>) {}

  findAll(params?: { userId?: string; restaurantId?: string; status?: string; limit?: number }) {
    const filter: any = {};
    if (params?.userId) filter.userId = params.userId;
    if (params?.restaurantId) filter.restaurantId = params.restaurantId;
    if (params?.status) filter.status = params.status;
    const query = this.model.find(filter).sort({ createdAt: -1 });
    if (params?.limit) query.limit(params.limit);
    return query;
  }

  async findOne(id: string): Promise<OrderDocument> {
    const o = await this.model.findById(id);
    if (!o) throw new NotFoundException('Order not found');
    return o;
  }

  create(data: Partial<Order>): Promise<OrderDocument> {
    return this.model.create(data);
  }

  async updateStatus(id: string, status: OrderStatus): Promise<OrderDocument> {
    const o = await this.model.findByIdAndUpdate(id, { status }, { new: true });
    if (!o) throw new NotFoundException('Order not found');
    return o;
  }
}
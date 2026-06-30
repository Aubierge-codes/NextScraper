import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from '../orders/order.schema';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async getDashboardStats() {
    const orders = await this.orderModel.find().exec();
    const totalRevenue = orders.reduce((s, o) => s + (o.total || 0), 0);
    const totalOrders = orders.length;
    const delivered = orders.filter((o) => o.status === 'delivered').length;
    const pending = orders.filter((o) => o.status === 'pending').length;

    return {
      totalRevenue: Math.round(totalRevenue * 100) / 100,
      totalOrders,
      delivered,
      pending,
      activeRestaurants: 87,
      newUsers: 312,
    };
  }

  async getRevenue(period: string) {
    const orders = await this.orderModel.find().sort({ createdAt: -1 }).limit(500).exec();
    const grouped: Record<string, number> = {};

    orders.forEach((o) => {
      const key = o.createdAt.toISOString().split('T')[0];
      grouped[key] = (grouped[key] || 0) + o.total;
    });

    return Object.entries(grouped)
      .map(([date, revenue]) => ({ date, revenue: Math.round(revenue * 100) / 100 }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-30);
  }
}
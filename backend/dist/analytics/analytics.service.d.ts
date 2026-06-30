import { Model } from 'mongoose';
import { OrderDocument } from '../orders/order.schema';
export declare class AnalyticsService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    getDashboardStats(): Promise<{
        totalRevenue: number;
        totalOrders: number;
        delivered: number;
        pending: number;
        activeRestaurants: number;
        newUsers: number;
    }>;
    getRevenue(period: string): Promise<{
        date: string;
        revenue: number;
    }[]>;
}

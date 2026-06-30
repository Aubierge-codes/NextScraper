import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private svc;
    constructor(svc: AnalyticsService);
    dashboard(): Promise<{
        totalRevenue: number;
        totalOrders: number;
        delivered: number;
        pending: number;
        activeRestaurants: number;
        newUsers: number;
    }>;
    revenue(period: string): Promise<{
        date: string;
        revenue: number;
    }[]>;
}

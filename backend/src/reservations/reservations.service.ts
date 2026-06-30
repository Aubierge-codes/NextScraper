import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './reservation.schema';

@Injectable()
export class ReservationsService {
  constructor(@InjectModel(Reservation.name) private model: Model<ReservationDocument>) {}

  findAll(params?: { userId?: string; restaurantId?: string }) {
    const filter: any = {};
    if (params?.userId) filter.userId = params.userId;
    if (params?.restaurantId) filter.restaurantId = params.restaurantId;
    return this.model.find(filter).sort({ createdAt: -1 });
  }

  create(data: Partial<Reservation>): Promise<ReservationDocument> {
    return this.model.create(data);
  }

  async update(id: string, data: Partial<Reservation>): Promise<ReservationDocument> {
    const r = await this.model.findByIdAndUpdate(id, data, { new: true });
    if (!r) throw new NotFoundException('Reservation not found');
    return r;
  }

  async remove(id: string): Promise<void> {
    await this.model.findByIdAndUpdate(id, { status: 'cancelled' });
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.schema';

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel(Restaurant.name) private model: Model<RestaurantDocument>) {}

  findAll(params?: { search?: string; type?: string }) {
    const filter: any = { isActive: true };
    if (params?.search) filter.name = { $regex: params.search, $options: 'i' };
    if (params?.type) filter.type = params.type;
    return this.model.find(filter).sort({ rating: -1 });
  }

  async findOne(id: string): Promise<RestaurantDocument> {
    const r = await this.model.findById(id);
    if (!r) throw new NotFoundException('Restaurant not found');
    return r;
  }

  create(data: Partial<Restaurant>): Promise<RestaurantDocument> {
    return this.model.create(data);
  }

  async update(id: string, data: Partial<Restaurant>): Promise<RestaurantDocument> {
    const r = await this.model.findByIdAndUpdate(id, data, { new: true });
    if (!r) throw new NotFoundException('Restaurant not found');
    return r;
  }

  async remove(id: string): Promise<void> {
    await this.model.findByIdAndUpdate(id, { isActive: false });
  }
}
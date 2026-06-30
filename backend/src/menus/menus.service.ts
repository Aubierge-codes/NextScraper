import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuItem, MenuItemDocument } from './menu-item.schema';

@Injectable()
export class MenusService {
  constructor(@InjectModel(MenuItem.name) private model: Model<MenuItemDocument>) {}

  getMenu(restaurantId: string, category?: string) {
    const filter: any = { restaurantId, isAvailable: true };
    if (category) filter.category = category;
    return this.model.find(filter).sort({ category: 1, name: 1 });
  }

  async getItem(id: string): Promise<MenuItemDocument> {
    const item = await this.model.findById(id);
    if (!item) throw new NotFoundException('Menu item not found');
    return item;
  }

  addItem(restaurantId: string, data: Partial<MenuItem>): Promise<MenuItemDocument> {
    return this.model.create({ ...data, restaurantId });
  }

  async updateItem(restaurantId: string, id: string, data: Partial<MenuItem>): Promise<MenuItemDocument> {
    const item = await this.model.findOneAndUpdate(
      { _id: id, restaurantId }, data, { new: true }
    );
    if (!item) throw new NotFoundException('Menu item not found');
    return item;
  }

  async deleteItem(restaurantId: string, id: string): Promise<void> {
    await this.model.findOneAndUpdate({ _id: id, restaurantId }, { isAvailable: false });
  }
}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema({ timestamps: true })
export class Restaurant {
  @Prop({ required: true })
  name: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  contactPerson: string;

  @Prop({ default: 'fast_food' })
  type: string;

  @Prop()
  ownerId: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: Object })
  operatingHours: Record<string, { open: boolean; from: string; to: string }>;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop({ default: 0 })
  rating: number;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
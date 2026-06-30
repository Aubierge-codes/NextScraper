import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
export type OrderType = 'delivery' | 'pickup';
export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  userId: string;

  @Prop()
  restaurantId: string;

  @Prop({ type: Array, required: true })
  items: { menuItemId: string; name: string; price: number; qty: number }[];

  @Prop({ required: true })
  subtotal: number;

  @Prop({ default: 0 })
  deliveryFee: number;

  @Prop({ default: 0 })
  tax: number;

  @Prop({ required: true })
  total: number;

  @Prop({ default: 'pending', enum: ['pending','confirmed','preparing','ready','delivered','cancelled'] })
  status: OrderStatus;

  @Prop({ default: 'delivery', enum: ['delivery', 'pickup'] })
  type: OrderType;

  @Prop()
  specialInstructions: string;

  @Prop()
  promoCode: string;

  // explicitly declare so TypeScript knows about them
  createdAt: Date;
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
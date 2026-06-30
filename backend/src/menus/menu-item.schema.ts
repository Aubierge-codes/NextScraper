import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuItemDocument = MenuItem & Document;

@Schema({ timestamps: true })
export class MenuItem {
  @Prop({ required: true })
  restaurantId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop({ default: 'Mains' })
  category: string;

  @Prop()
  badge: string;

  @Prop({ default: true })
  isAvailable: boolean;
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
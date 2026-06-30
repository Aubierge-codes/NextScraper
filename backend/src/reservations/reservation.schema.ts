import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema({ timestamps: true })
export class Reservation {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  restaurantId: string;

  @Prop({ required: true })
  venue: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  guests: number;

  @Prop()
  specialRequests: string;

  @Prop({ default: 'confirmed', enum: ['confirmed', 'cancelled', 'completed'] })
  status: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
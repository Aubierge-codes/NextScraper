import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

  async create(data: Partial<User> & { password: string }): Promise<UserDocument> {
    const exists = await this.model.findOne({ email: data.email });
    if (exists) throw new ConflictException('Email already registered');
    const hashed = await bcrypt.hash(data.password, 12);
    return this.model.create({ ...data, password: hashed });
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.model.findOne({ email });
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.model.findById(id).select('-password');
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, data: Partial<User>): Promise<UserDocument> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).select('-password');
  }

  async addLoyaltyPoints(id: string, points: number): Promise<void> {
    await this.model.findByIdAndUpdate(id, { $inc: { loyaltyPoints: points } });
  }
}
import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard, Roles } from '../auth/roles.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private svc: OrdersService) {}

  @Get()
  findAll(@Query() q: any, @Request() req) {
    // Admins see all orders; users see only their own
    if (req.user.role === 'admin') return this.svc.findAll(q);
    return this.svc.findAll({ ...q, userId: req.user.id });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(id);
  }

  @Post()
  create(@Body() body: any, @Request() req) {
    const subtotal = body.items.reduce((s: number, i: any) => s + i.price * i.qty, 0);
    const deliveryFee = body.type === 'delivery' ? 3.5 : 0;
    const tax = subtotal * 0.08;
    return this.svc.create({
      ...body,
      userId: req.user.id,
      subtotal,
      deliveryFee,
      tax,
      total: subtotal + deliveryFee + tax,
    });
  }

  @Patch(':id/status')
  @UseGuards(RolesGuard)
  @Roles('admin')
  updateStatus(@Param('id') id: string, @Body('status') status: any) {
    return this.svc.updateStatus(id, status);
  }
}

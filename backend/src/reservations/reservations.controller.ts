import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reservations')
@UseGuards(JwtAuthGuard)
export class ReservationsController {
  constructor(private svc: ReservationsService) {}

  @Get()
  findAll(@Query() q: any, @Request() req) {
    if (req.user.role === 'admin') return this.svc.findAll(q);
    return this.svc.findAll({ ...q, userId: req.user.id });
  }

  @Post()
  create(@Body() body: any, @Request() req) {
    return this.svc.create({ ...body, userId: req.user.id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.svc.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}

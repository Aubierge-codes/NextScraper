import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { MenusService } from './menus.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('menus')
export class MenusController {
  constructor(private svc: MenusService) {}

  @Get(':restaurantId')
  getMenu(@Param('restaurantId') rid: string, @Query('category') cat?: string) {
    return this.svc.getMenu(rid, cat);
  }

  @Post(':restaurantId/items')
  @UseGuards(JwtAuthGuard)
  addItem(@Param('restaurantId') rid: string, @Body() body: any) {
    return this.svc.addItem(rid, body);
  }

  @Patch(':restaurantId/items/:id')
  @UseGuards(JwtAuthGuard)
  updateItem(@Param('restaurantId') rid: string, @Param('id') id: string, @Body() body: any) {
    return this.svc.updateItem(rid, id, body);
  }

  @Delete(':restaurantId/items/:id')
  @UseGuards(JwtAuthGuard)
  deleteItem(@Param('restaurantId') rid: string, @Param('id') id: string) {
    return this.svc.deleteItem(rid, id);
  }
}

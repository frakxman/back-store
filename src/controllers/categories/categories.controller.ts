import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // / EndPoint with two parameters
  @Get('/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `category ${id} and product ${productId}`;
  }
}

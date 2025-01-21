import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ParseIntPipe } from 'src/common/pipes/parse-int/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

// @UsePipes(ValidationPipe)
@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeesService: CoffeesService,
    @Inject(REQUEST) private readonly request: Request,
  ) {
    // console.log('CoffeesController created');
  }

  // @UsePipes(ValidationPipe)
  // @SetMetadata('isPublic', true)
  // @ApiResponse({ status: 403, description: 'Forbidden.' }) // @ApiForbiddenResponse is an alternative for this example
  // @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Public()
  @Get()
  async findAll(
    // @Protocol('https') protocol: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    // console.log(protocol);
    // await new Promise((resolve) => setTimeout(() => resolve, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.findOne(+id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}

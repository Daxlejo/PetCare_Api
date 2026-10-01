import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { AlimentacionService } from './alimentacion.service';
import { CreateAlimentacionDto } from './dto/create-alimentacion.dto';
import { UpdateAlimentacionDto } from './dto/update-alimentacion.dto';

@Controller('alimentaciones')
export class AlimentacionController {
  constructor(private readonly service: AlimentacionService) {}

  @Post()
  create(@Body() dto: CreateAlimentacionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAlimentacionDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.service.remove(id);
  }
}


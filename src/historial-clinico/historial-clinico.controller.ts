import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { HistorialClinicoService } from './historial-clinico.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';

@Controller('historial-clinico')
export class HistorialClinicoController {
  constructor(private readonly service: HistorialClinicoService) {}

  @Post()
  create(@Body() dto: CreateHistorialClinicoDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateHistorialClinicoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.service.remove(id);
  }
}


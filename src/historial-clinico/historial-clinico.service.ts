import { Injectable } from '@nestjs/common';
import { InMemoryCrudService } from '../common/in-memory-crud.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { HistorialClinicoDto } from './dto/historial-clinico.dto';

@Injectable()
export class HistorialClinicoService extends InMemoryCrudService<HistorialClinicoDto, CreateHistorialClinicoDto, UpdateHistorialClinicoDto> {}

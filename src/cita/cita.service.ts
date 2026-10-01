import { Injectable } from '@nestjs/common';
import { InMemoryCrudService } from '../common/in-memory-crud.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { CitaDto } from './dto/cita.dto';

@Injectable()
export class CitaService extends InMemoryCrudService<CitaDto, CreateCitaDto, UpdateCitaDto> {}

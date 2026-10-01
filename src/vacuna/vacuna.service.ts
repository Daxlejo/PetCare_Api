import { Injectable } from '@nestjs/common';
import { InMemoryCrudService } from '../common/in-memory-crud.service';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';
import { VacunaDto } from './dto/vacuna.dto';

@Injectable()
export class VacunaService extends InMemoryCrudService<VacunaDto, CreateVacunaDto, UpdateVacunaDto> {}

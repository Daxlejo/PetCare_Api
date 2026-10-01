import { Injectable } from '@nestjs/common';
import { InMemoryCrudService } from '../common/in-memory-crud.service';
import { CreateAlimentacionDto } from './dto/create-alimentacion.dto';
import { UpdateAlimentacionDto } from './dto/update-alimentacion.dto';
import { AlimentacionDto } from './dto/alimentacion.dto';

@Injectable()
export class AlimentacionService extends InMemoryCrudService<AlimentacionDto, CreateAlimentacionDto, UpdateAlimentacionDto> {}

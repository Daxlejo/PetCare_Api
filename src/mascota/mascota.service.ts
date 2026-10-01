import { Injectable } from '@nestjs/common';
import { InMemoryCrudService } from '../common/in-memory-crud.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { MascotaDto } from './dto/mascota.dto';

@Injectable()
export class MascotaService extends InMemoryCrudService<MascotaDto, CreateMascotaDto, UpdateMascotaDto> {}

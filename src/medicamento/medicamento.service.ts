import { Injectable } from '@nestjs/common';
import { InMemoryCrudService } from '../common/in-memory-crud.service';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
import { MedicamentoDto } from './dto/medicamento.dto';

@Injectable()
export class MedicamentoService extends InMemoryCrudService<MedicamentoDto, CreateMedicamentoDto, UpdateMedicamentoDto> {}

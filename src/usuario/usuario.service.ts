import { Injectable } from '@nestjs/common';
import { InMemoryCrudService } from '../common/in-memory-crud.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService extends InMemoryCrudService<UsuarioDto, CreateUsuarioDto, UpdateUsuarioDto> {}

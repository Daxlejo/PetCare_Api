import { OmitType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

// Respuesta: nunca devuelve password
export class UsuarioDto extends OmitType(CreateUsuarioDto, ['password'] as const) {
  id: string;
}

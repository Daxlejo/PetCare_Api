import { PartialType } from '@nestjs/mapped-types';
import { CreateAlimentacionDto } from './create-alimentacion.dto';

export class UpdateAlimentacionDto extends PartialType(CreateAlimentacionDto) {}

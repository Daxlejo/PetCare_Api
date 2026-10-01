import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateAlimentacionDto {
  @IsUUID()
  mascotaId: string;

  @IsString()
  @IsNotEmpty()
  tipoAlimento: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsNumber()
  @IsPositive()
  cantidad: number;

  @IsString()
  @IsNotEmpty()
  unidad: string;

  @IsString()
  @IsNotEmpty()
  frecuencia: string;

  @IsString()
  @IsNotEmpty()
  horario: string;

  @IsOptional()
  @IsString()
  observaciones?: string;
}

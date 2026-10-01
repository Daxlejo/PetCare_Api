import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateMedicamentoDto {
  @IsUUID()
  mascotaId: string;

  @IsString()
  @IsNotEmpty()
  nombreMedicamento: string;

  @IsString()
  @IsNotEmpty()
  dosis: string;

  @IsString()
  @IsNotEmpty()
  frecuencia: string;

  @IsDateString()
  fechaInicio: string;

  @IsOptional()
  @IsDateString()
  fechaFin?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}

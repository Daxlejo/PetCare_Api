import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateHistorialClinicoDto {
  @IsUUID()
  mascotaId: string;

  @IsDateString()
  fechaConsulta: string;

  @IsString()
  @IsNotEmpty()
  diagnostico: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @IsNumber()
  @IsPositive()
  pesoRegistrado: number;

  @IsString()
  @IsNotEmpty()
  veterinarioResponsable: string;
}

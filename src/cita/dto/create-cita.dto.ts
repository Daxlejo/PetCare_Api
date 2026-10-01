import { IsDateString, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export enum EstadoCita {
  PROGRAMADA = 'PROGRAMADA',
  REALIZADA = 'REALIZADA',
  CANCELADA = 'CANCELADA',
  REPROGRAMADA = 'REPROGRAMADA',
}

export class CreateCitaDto {
  @IsUUID()
  mascotaId: string;

  @IsDateString()
  fechaHora: string;

  @IsString()
  @IsNotEmpty()
  motivo: string;

  @IsString()
  @IsNotEmpty()
  lugarVeterinaria: string;

  @IsEnum(EstadoCita)
  estado: EstadoCita;
}

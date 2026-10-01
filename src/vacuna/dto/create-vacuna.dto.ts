import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateVacunaDto {
  @IsUUID()
  mascotaId: string;

  @IsString()
  @IsNotEmpty()
  nombreVacuna: string;

  @IsDateString()
  fechaAplicacion: string;

  @IsString()
  @IsNotEmpty()
  loteVacuna: string;

  @IsOptional()
  @IsDateString()
  proximaDosis?: string;
}

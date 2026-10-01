import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';

export enum Especie {
  PERRO = 'PERRO',
  GATO = 'GATO',
  AVE = 'AVE',
  ROEDOR = 'ROEDOR',
  REPTIL = 'REPTIL',
  OTRO = 'OTRO',
}

export class CreateMascotaDto {
  @IsUUID()
  usuarioId: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEnum(Especie)
  especie: Especie;

  @IsString()
  @IsNotEmpty()
  raza: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsNumber()
  @IsPositive()
  peso: number;

  @IsOptional()
  @IsString()
  fotoUrl?: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}

import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export enum RolUsuario {
  DUENO = 'DUENO',
  VETERINARIO = 'VETERINARIO',
  ADMIN = 'ADMIN',
}

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsEnum(RolUsuario)
  rol: RolUsuario;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}

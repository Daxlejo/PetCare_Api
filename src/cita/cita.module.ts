import { Module } from '@nestjs/common';
import { CitaController } from './cita.controller';
import { CitaService } from './cita.service';

@Module({
  controllers: [CitaController],
  providers: [CitaService],
  exports: [CitaService],
})
export class CitaModule {}

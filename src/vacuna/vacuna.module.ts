import { Module } from '@nestjs/common';
import { VacunaController } from './vacuna.controller';
import { VacunaService } from './vacuna.service';

@Module({
  controllers: [VacunaController],
  providers: [VacunaService],
  exports: [VacunaService],
})
export class VacunaModule {}

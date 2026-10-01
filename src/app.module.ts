import { Module } from '@nestjs/common';
import { AlimentacionModule } from './alimentacion/alimentacion.module';
import { CitaModule } from './cita/cita.module';
import { UsuarioModule } from './usuario/usuario.module';
import { VacunaModule } from './vacuna/vacuna.module';
import { HistorialClinicoModule } from './historial-clinico/historial-clinico.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { MascotaModule } from './mascota/mascota.module';

@Module({
  imports: [AlimentacionModule, CitaModule, UsuarioModule, VacunaModule, HistorialClinicoModule, MedicamentoModule, MascotaModule],
})
export class AppModule {}

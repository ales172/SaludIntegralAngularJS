import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesAgregaComponent } from './components/pacientes-agrega/pacientes-agrega.component';
import { PacientesEditaComponent } from './components/pacientes-edita/pacientes-edita.component';
import { PacientesEliminaComponent } from './components/pacientes-elimina/pacientes-elimina.component';
import { PacientesListaComponent } from './components/pacientes-lista/pacientes-lista.component';
import { PacientesDetalleComponent } from './components/pacientes-detalle/pacientes-detalle.component';
import { ProfesionalAgregaComponent } from './components/profesional-agrega/profesional-agrega.component';
import { ProfesionalEditaComponent } from './components/profesional-edita/profesional-edita.component';
import { ProfesionalEliminaComponent } from './components/profesional-elimina/profesional-elimina.component';
import { ProfesionalListaComponent } from './components/profesional-lista/profesional-lista.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProfesionalDetalleComponent } from './components/profesional-detalle/profesional-detalle.component';
import { TurnoListaComponent } from './components/turno-lista/turno-lista.component';
import { TurnoDetalleComponent } from './components/turno-detalle/turno-detalle.component';
import { TurnoEditaComponent } from './components/turno-edita/turno-edita.component';
import { TurnoAgregaComponent } from './components/turno-agrega/turno-agrega.component';
import { TurnoEliminaComponent } from './components/turno-elimina/turno-elimina.component';

const routes: Routes = [
  { path: 'PacienteAgrega', component: PacientesAgregaComponent },
  { path: 'PacienteEdita/:id', component: PacientesEditaComponent },
  { path: 'PacienteElimina/:id', component: PacientesEliminaComponent },
  { path: 'PacienteLista', component: PacientesListaComponent },
  { path: 'PacienteDetalle/:id', component: PacientesDetalleComponent },
  { path: 'ProfesionalDetalle/:id', component: ProfesionalDetalleComponent },
  { path: 'ProfesionalAgrega', component: ProfesionalAgregaComponent },
  { path: 'ProfesionalEdita/:id', component: ProfesionalEditaComponent },
  { path: 'ProfesionalElimina/:id', component: ProfesionalEliminaComponent },
  { path: 'ProfesionalLista', component: ProfesionalListaComponent },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'TurnoLista/:id', component: TurnoListaComponent },
  { path: 'TurnoDetalle/:id', component: TurnoDetalleComponent },
  { path: 'TurnoEdita/:id', component: TurnoEditaComponent },
  { path: 'TurnoAgrega', component: TurnoAgregaComponent },
  { path: 'TurnoElimina/:id', component: TurnoEliminaComponent },
 // { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
 // { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

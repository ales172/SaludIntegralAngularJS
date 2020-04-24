import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesAgregaComponent } from './components/pacientes-agrega/pacientes-agrega.component';
import { PacientesEditaComponent } from './components/pacientes-edita/pacientes-edita.component';
import { PacientesEliminaComponent } from './components/pacientes-elimina/pacientes-elimina.component';
import { ProfesionalAgregaComponent } from './components/profesional-agrega/profesional-agrega.component';
import { ProfesionalEditaComponent } from './components/profesional-edita/profesional-edita.component';
import { ProfesionalEliminaComponent } from './components/profesional-elimina/profesional-elimina.component';
import { ProfesionalListaComponent } from './components/profesional-lista/profesional-lista.component';
import { PacientesListaComponent } from './components/pacientes-lista/pacientes-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { PacienteService } from './shared/paciente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacientesDetalleComponent } from './components/pacientes-detalle/pacientes-detalle.component';
import { ObservacionAgregaComponent } from './components/observacion-agrega/observacion-agrega.component';
import { ObservacionEliminaComponent } from './components/observacion-elimina/observacion-elimina.component';
import { FichaEliminaComponent } from './components/ficha-elimina/ficha-elimina.component';
import { FichaAgregaComponent } from './components/ficha-agrega/ficha-agrega.component';
import { FichaEditaComponent } from './components/ficha-edita/ficha-edita.component';
import { ObservacionEditaComponent } from './components/observacion-edita/observacion-edita.component';
import { TratamientoEditaComponent } from './components/tratamiento-edita/tratamiento-edita.component';
import { TratamientoAgregaComponent } from './components/tratamiento-agrega/tratamiento-agrega.component';
import { TratamientoEliminaComponent } from './components/tratamiento-elimina/tratamiento-elimina.component';
import { TurnoAgregaComponent } from './components/turno-agrega/turno-agrega.component';
import { TurnoEditaComponent } from './components/turno-edita/turno-edita.component';
import { TurnoEliminaComponent } from './components/turno-elimina/turno-elimina.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProfesionalDetalleComponent } from './components/profesional-detalle/profesional-detalle.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FichaDetalleComponent } from './components/ficha-detalle/ficha-detalle.component';
import { TurnoListaComponent } from './components/turno-lista/turno-lista.component';
import { TurnoDetalleComponent } from './components/turno-detalle/turno-detalle.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StyleUtils } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    PacientesAgregaComponent,
    PacientesEditaComponent,
    PacientesEliminaComponent,
    ProfesionalAgregaComponent,
    ProfesionalEditaComponent,
    ProfesionalEliminaComponent,
    ProfesionalListaComponent,
    PacientesListaComponent,
    PacientesDetalleComponent,
    ObservacionAgregaComponent,
    ObservacionEliminaComponent,
    FichaEliminaComponent,
    FichaAgregaComponent,
    FichaEditaComponent,
    ObservacionEditaComponent,
    TratamientoEditaComponent,
    TratamientoAgregaComponent,
    TratamientoEliminaComponent,
    TurnoAgregaComponent,
    TurnoEditaComponent,
    TurnoEliminaComponent,
    CalendarComponent,
    ProfesionalDetalleComponent,
    FichaDetalleComponent,
    TurnoListaComponent,
    TurnoDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
   // AngularFireAuth,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule, 
    MatSidenavModule,
    OverlayModule,
    FlexLayoutModule
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent],
  entryComponents: [TurnoAgregaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor() {}

}

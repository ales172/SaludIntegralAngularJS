import { Injectable } from '@angular/core';
import { Turno } from './turno';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class TurnoService {
  turnosRef: AngularFireList<any>;
  turnoRef: AngularFireObject<any>;
  listaTurnos: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  /* Create turno */
  AddTurno(turno: Turno) {
    this.turnosRef.push({
     
      key_paciente: turno.key_paciente,
      nombre_paciente: turno.nombre_paciente,
      apellido_paciente: turno.apellido_paciente,
      //key_profesional: string;
      nombre_profesional: turno.nombre_profesional,
      apellido_profesional: turno.apellido_profesional,
      especialidad: turno.especialidad,
      fecha: turno.fecha,
      ingreso: turno.ingreso,

    })
      .catch(error => {
        this.errorMgmt(error);
      })
  }

  /* Get turno */
  GetTurno(id: string) {
    this.turnoRef = this.db.object('turno-lista/' + id);
    return this.turnoRef;
  }

  /* Get lista deturnos */
  GetListaTurno() {
    this.turnosRef = this.db.list('turnos-lista');
    return this.turnosRef;
  }

  /* Get lista deturnos */
  GetListaTurnosPorPaciente(idPaciente: string) {
    this.listaTurnos = this.db.list('/turnosXPaciente', ref => ref.orderByChild('key_paciente').equalTo('idPaciente'));
   
    return this.listaTurnos;
  }

  /* Update turno */
  UpdateTurno(id, turno: Turno) {
    this.turnoRef.update({
      key_paciente: turno.key_paciente,
      nombre_paciente: turno.nombre_paciente,
      apellido_paciente: turno.apellido_paciente,
      //key_profesional: string;
      nombre_profesional: turno.nombre_profesional,
      apellido_profesional: turno.apellido_profesional,
      especialidad: turno.especialidad,
      fecha: turno.fecha,
      ingreso: turno.ingreso,
    })
      .catch(error => {
        this.errorMgmt(error);
      })
  }

  /* Delete turno */
  DeleteTurno(id: string) {
    this.turnoRef = this.db.object('turnos-lista/' + id);
    this.turnoRef.remove()
      .catch(error => {
        this.errorMgmt(error);
      })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
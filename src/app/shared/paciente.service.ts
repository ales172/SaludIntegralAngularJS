
import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  pacientesRef: AngularFireList<any>;
  pacienteRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  /* Create paciente */
  AddPaciente(paciente: Paciente) {
    this.pacientesRef.push({
      nombre_paciente: paciente.nombre_paciente,
      apellido_paciente: paciente.apellido_paciente,
      dni: paciente.dni,
      fecha_nacimiento: paciente.fecha_nacimiento,
      obra_social: paciente.obra_social,
      numero_os: paciente.numero_os,
      telefono: paciente.telefono,
      telefono_contacto: paciente.telefono_contacto
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get paciente */
  GetPaciente(id: string) {
    this.pacienteRef = this.db.object('pacientes-lista/' + id);
    return this.pacienteRef;
  }  

  /* Get lista depacientes */
  GetListaPaciente() {
    this.pacientesRef = this.db.list('pacientes-lista');
    return this.pacientesRef;
  }

  /* Update paciente */
  UpdatePaciente(id, paciente: Paciente) {
    this.pacienteRef.update({
      nombre_paciente: paciente.nombre_paciente,
      apellido_paciente: paciente.apellido_paciente,
      dni: paciente.dni,
      fecha_nacimiento: paciente.fecha_nacimiento,
      obra_social: paciente.obra_social,
      numero_os: paciente.numero_os,
      telefono: paciente.telefono,
      telefono_contacto: paciente.telefono_contacto
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Delete paciente */
  DeletePaciente(id: string) {
    this.pacienteRef = this.db.object('pacientes-lista/' + id);
    this.pacienteRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
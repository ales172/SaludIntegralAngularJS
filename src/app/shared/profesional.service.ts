import { Injectable } from '@angular/core';
import { Profesional } from './profesional';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
 
@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  profesionalesRef: AngularFireList<any>;
  profesionalRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  /* Create profesional */
  AddProfesional(profesional: Profesional) {
    this.profesionalesRef.push({
      nombre_profesional: profesional.nombre_profesional,
      apellido_profesional: profesional.apellido_profesional,
      dni: profesional.dni,
      matricula: profesional.matricula,
      especialidad: profesional.especialidad,
      telefono: profesional.telefono,
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get profesional */
  GetProfesional(id: string) {
    this.profesionalRef = this.db.object('profesional-lista/' + id);
    return this.profesionalRef;
  }  

  /* Get lista de profesionales */
  GetListaProfesional() {
    this.profesionalesRef = this.db.list('profesional-lista');
    return this.profesionalesRef;
  }

  /* Update paciente */
  UpdateProfesional(id, profesional: Profesional) {
    this.profesionalRef.update({
      nombre_profesional: profesional.nombre_profesional,
      apellido_profesional: profesional.apellido_profesional,
      dni: profesional.dni,
      matricula: profesional.matricula,
      especialidad: profesional.especialidad,
      telefono: profesional.telefono
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Delete paciente */
  DeleteProfesional(id: string) {
    this.profesionalRef = this.db.object('profesional-lista/' + id);
    this.profesionalRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }

}

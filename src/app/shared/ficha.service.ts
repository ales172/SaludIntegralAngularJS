import { Injectable } from '@angular/core';
import { Ficha } from './ficha';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class FichaService {
  fichasRef: AngularFireList<any>;
  fichaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  /* Create ficha */
  AddFicha(ficha: Ficha) {
    this.fichasRef.push({
      key_paciente: ficha.key_paciente,
      nombre_paciente: ficha.nombre_paciente,
      apellido_paciente: ficha.apellido_paciente,
      antecedentes: ficha.antecedentes,
      contraindicaciones: ficha.contraindicaciones,
      fecha_ingreso: ficha.fecha_ingreso,

    })
      .catch(error => {
        this.errorMgmt(error);
      })
  }

  /* Get ficha */
  GetFicha(id: string) {
    this.fichaRef = this.db.object('ficha-lista/' + id);
    return this.fichaRef;
  }

  /* Get lista defichas */
  GetListaFicha() {
    this.fichasRef = this.db.list('fichas-lista');
    return this.fichasRef;
  }

  /* Update ficha */
  UpdateFicha(id, ficha: Ficha) {
    this.fichaRef.update({
      key_paciente: ficha.key_paciente,
      nombre_paciente: ficha.nombre_paciente,
      apellido_paciente: ficha.apellido_paciente,
      antecedentes: ficha.antecedentes,
      contraindicaciones: ficha.contraindicaciones,
      fecha_ingreso: ficha.fecha_ingreso,
    })
      .catch(error => {
        this.errorMgmt(error);
      })
  }

  /* Delete ficha */
  DeleteFicha(id: string) {
    this.fichaRef = this.db.object('fichas-lista/' + id);
    this.fichaRef.remove()
      .catch(error => {
        this.errorMgmt(error);
      })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
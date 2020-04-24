import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Profesional } from 'src/app/shared/profesional';
import { Paciente } from 'src/app/shared/paciente';
import { PacienteService } from 'src/app/shared/paciente.service';
import { ProfesionalService } from 'src/app/shared/profesional.service';
import { moment } from 'fullcalendar';
import { Timestamp } from 'rxjs';
import { Time } from '@angular/common';
@Component({
  selector: 'app-turno-agrega',
  templateUrl: './turno-agrega.component.html',
  styleUrls: ['./turno-agrega.component.css']
})
export class TurnoAgregaComponent implements OnInit {

  form: FormGroup;
  pacienteControl = new FormControl('', Validators.required);
  profesionalControl = new FormControl('', Validators.required);
  paciente: any[];
  profesional: any[];
  fecha: Date;
  hora: Time;
  profesionales: Profesional[] = [];
  pacientes: Paciente[] = [];
  primer: Boolean;
  minDate: Date;
  fechaTurno: Date;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TurnoAgregaComponent>,
    private pacienteLista: PacienteService,
    private profesionalLista: ProfesionalService,
    @Inject(MAT_DIALOG_DATA) data) {
      
    this.profesional = data.profesional;
    this.paciente = data.paciente;
    this.fecha = moment(data.fecha).format('DD-MM-YYYY');
    this.hora = moment(data.fecha).format('h:mm a');
    this.primer = data.primer;
  }

  ngOnInit() {
    this.form = this.fb.group({
      fecha: [this.fecha, []],
      hora: [this.hora, []],
      profesional: [this.profesional, []],
      paciente: [this.paciente, []],
      primer: [this.primer,[]]
    });
    this.getPacientes();
    this.getProfesionales();
    this.minDate = moment();
    this.fechaTurno = this.fecha; 
  }

  save() {    
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
  getPacientes() {
    this.pacienteLista.GetListaPaciente().snapshotChanges().subscribe(pctes => {
      pctes.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.pacientes.push(a as Paciente);
      });
    })
  }
  getProfesionales(){
    this.profesionalLista.GetListaProfesional().snapshotChanges().subscribe(profs => {
      profs.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.profesionales.push(a as Profesional);
      })
    });
  }
}
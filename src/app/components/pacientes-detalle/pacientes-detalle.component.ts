import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente } from './../../shared/paciente';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { PacienteService } from './../../shared/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { moment } from 'fullcalendar';


@Component({
  selector: 'app-pacientes-detalle',
  templateUrl: './pacientes-detalle.component.html',
  styleUrls: ['./pacientes-detalle.component.css']
})
export class PacientesDetalleComponent implements OnInit {
  id: any;
  element: Paciente = {
    $key: "",
   nombre_paciente: "",
   apellido_paciente: "",
   dni: 0,
   fecha_nacimiento: moment(),
   obra_social: "",
   numero_os: 0,
   telefono: 0,
   telefono_contacto: 0
   };
  dataSource: MatTableDataSource<Paciente[]>;
  @ViewChild('dataTable', {static: false}) dataTable: MatTable<any>;
  constructor(
    private actRoute: ActivatedRoute, 
    private pacienteApi: PacienteService
    ) { 
  }
  deletePaciente(index: number, e) {
    if (window.confirm('Are you sure?')) {
      const data = this.dataSource.data;
      this.dataSource.data = data;
      this.pacienteApi.DeletePaciente(e.$key)
    }
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.pacienteApi.GetPaciente(this.id).valueChanges().subscribe(data => {
      /* Data table */
      data.$key = this.id;
      this.element = data;
      this.element.$key = this.id;
      this.dataSource = new MatTableDataSource<Paciente[]>([data]);    
        
    })
  }
  fichaDialog(){}
  observacionesDialog(){}
  tratamientosDialog(){}
  turnosDialog(){}
}
import { Component, OnInit } from '@angular/core';
import { Paciente } from './../../shared/paciente';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from './../../shared/paciente.service';
@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {

  dataSource: MatTableDataSource<Paciente>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  PacienteData: any = [];
  displayedColumns: any[] = [
    '$key',
    'nombre_paciente',
    'apellido_paciente',
    'dni',
    'fecha_nacimiento',
    'obra_social',
    'numero_os',
    'telefono',
    'telefono_contacto',
    'accion'
  ];

  constructor(private pacienteApi: PacienteService) {
    this.pacienteApi.GetListaPaciente()
      .snapshotChanges().subscribe(pacientes => {
        pacientes.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.PacienteData.push(a as Paciente)
        })
        /* Data table */
        this.dataSource = new MatTableDataSource(this.PacienteData);
        /* Pagination */
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      })
  }

  //filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /* Delete */
  deletePaciente(index: number, e) {
    if (window.confirm('Are you sure?')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.pacienteApi.DeletePaciente(e.$key)
    }
  }
  ngOnInit() {
  }
  chbg() {
    document.getElementById('selected').style.backgroundColor = '#eeeeee';
  }   
}
import { Component, OnInit } from '@angular/core';
import { Turno } from './../../shared/turno';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TurnoService } from './../../shared/turno.service';

@Component({
  selector: 'app-turno-lista',
  templateUrl: './turno-lista.component.html',
  styleUrls: ['./turno-lista.component.css']
})
export class TurnoListaComponent implements OnInit {

  dataSource: MatTableDataSource<Turno>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  TurnoData: any = [];
  displayedColumns: any[] = [
    '$key',
    'nombre_turno',
    'apellido_turno',
    'especialidad',
    'telefono',
    'accion',
    'key_paciente',
    'nombre_paciente',
    'apellido_paciente',
    //'key_profesional',
    'nombre_profesional',
    'apellido_profesional',
    'especialidad',
    'fecha',
    'ingreso'
  ];

  constructor(private turnoApi: TurnoService) {
    this.turnoApi.GetListaTurno()
      .snapshotChanges().subscribe(turnos => {
        turnos.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.TurnoData.push(a as Turno)
        })
        /* Data table */
        this.dataSource = new MatTableDataSource(this.TurnoData);
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
  deleteTurno(index: number, e) {
    if (window.confirm('Estas seguro que queres eliminarlo?')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.turnoApi.DeleteTurno(e.$key)
    }
  }
  ngOnInit() {
  }

}

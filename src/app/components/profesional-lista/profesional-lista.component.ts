import { Component, OnInit } from '@angular/core';
import { Profesional } from './../../shared/profesional';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfesionalService } from './../../shared/profesional.service';

@Component({
  selector: 'app-profesional-lista',
  templateUrl: './profesional-lista.component.html',
  styleUrls: ['./profesional-lista.component.css']
})
export class ProfesionalListaComponent implements OnInit {

  dataSource: MatTableDataSource<Profesional>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ProfesionalData: any = [];
  displayedColumns: any[] = [
    '$key',
    'nombre_profesional',
    'apellido_profesional',
    'especialidad',
    'telefono',
    'accion'
  ];

  constructor(private profesionalApi: ProfesionalService) {
    this.profesionalApi.GetListaProfesional()
      .snapshotChanges().subscribe(profesionales => {
        profesionales.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.ProfesionalData.push(a as Profesional)
        })
        /* Data table */
        this.dataSource = new MatTableDataSource(this.ProfesionalData);
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
  deleteProfesional(index: number, e) {
    if (window.confirm('Estas seguro que queres eliminarlo?')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.profesionalApi.DeleteProfesional(e.$key)
    }
  }
  ngOnInit() {
  }

}

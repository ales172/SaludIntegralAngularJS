import { Component, OnInit, ViewChild } from '@angular/core';
import { Profesional } from './../../shared/profesional';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { ProfesionalService } from './../../shared/profesional.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesional-detalle',
  templateUrl: './profesional-detalle.component.html',
  styleUrls: ['./profesional-detalle.component.css']
})
export class ProfesionalDetalleComponent implements OnInit {
  id: any;
  element: Profesional;
  displayedColumns: any[] = [
    'nombre', 
    'dni', 
    'matricula', 
    'especialidad',
    'telefono', 
    'accion'
  ];
  dataSource: MatTableDataSource<Profesional[]>;
  @ViewChild('dataTable', {static: false}) dataTable: MatTable<any>;
  constructor(
    private actRoute: ActivatedRoute, 
    private profesionalApi: ProfesionalService
    ) { 
  }
  deleteProfesional(index: number, e) {
    if (window.confirm('Está seguro?')) {
      const data = this.dataSource.data;
      this.dataSource.data = data;
      this.profesionalApi.DeleteProfesional(e.$key)
    }
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.profesionalApi.GetProfesional(this.id).valueChanges().subscribe(data => {
      /* Data table */
      data.$key = this.id;
      this.element = data;
      this.element.$key = this.id;
      this.dataSource = new MatTableDataSource<Profesional[]>([data]);    
    })
  }

}

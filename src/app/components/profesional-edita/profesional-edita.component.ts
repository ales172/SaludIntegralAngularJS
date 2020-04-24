import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { ProfesionalService } from './../../shared/profesional.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-profesional-edita',
  templateUrl: './profesional-edita.component.html',
  styleUrls: ['./profesional-edita.component.css']
})
export class ProfesionalEditaComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  editProfesionalForm: FormGroup;

  ngOnInit() {
    this.updateProfesionalForm();
  }

  constructor(
    public fb: FormBuilder,
    private location: Location,
    private profesionalApi: ProfesionalService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');    
    this.profesionalApi.GetProfesional(id).valueChanges().subscribe(data => {
      this.editProfesionalForm.setValue(data);      
    })
    
  }

  /* Update form */
  updateProfesionalForm() {
    this.editProfesionalForm = this.fb.group({
      nombre_profesional: ['', [Validators.required]],
      apellido_profesional: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.editProfesionalForm.controls[controlName].hasError(errorName);
  }

  /* Go to previous page */
  goBack() {
    this.location.back();
  }

  /* Submit book */
  updateProfesional() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Seguro que desea actulizar datos?')) {
      this.profesionalApi.UpdateProfesional(id, this.editProfesionalForm.value);
      this.router.navigate(['ProfesionalLista']);
    }
  }
}

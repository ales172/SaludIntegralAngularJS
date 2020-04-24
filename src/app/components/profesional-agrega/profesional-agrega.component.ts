import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ProfesionalService } from './../../shared/profesional.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-profesional-agrega',
  templateUrl: './profesional-agrega.component.html',
  styleUrls: ['./profesional-agrega.component.css']
})
export class ProfesionalAgregaComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('resetProfesionalForm', {static: false}) myNgForm;
  selectedBindingType: string;
  profesionalForm: FormGroup;
  ngOnInit() {
    this.profesionalApi.GetListaProfesional();
    this.submitProfesionalForm();
  }
  constructor(
    public fb: FormBuilder,
    private profesionalApi: ProfesionalService,
    private router: Router
  ){ }

  /* Reactive profesional form */
  submitProfesionalForm() {
    this.profesionalForm = this.fb.group({
      nombre_profesional: ['', [Validators.required]],
      apellido_profesional: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      especialidad: ['',[Validators.required]],
      telefono: ['', [Validators.required]]
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.profesionalForm.controls[controlName].hasError(errorName);
  }
  
  /* Reset form */
  resetForm() {
    this.profesionalForm.reset();
    Object.keys(this.profesionalForm.controls).forEach(key => {
      this.profesionalForm.controls[key].setErrors(null)
    });
  }

  /* Submit */
  submitProfesional() {
    if (this.profesionalForm.valid){
      this.profesionalApi.AddProfesional(this.profesionalForm.value)
      this.router.navigate(['ProfesionalLista']);
    }
  }

}

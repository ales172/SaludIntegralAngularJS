import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { PacienteService } from './../../shared/paciente.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-pacientes-agrega',
  templateUrl: './pacientes-agrega.component.html',
  styleUrls: ['./pacientes-agrega.component.css']
})
export class PacientesAgregaComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('resetPacienteForm', {static: false}) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedBindingType: string;
  pacienteForm: FormGroup;

  ngOnInit() { 
    this.pacienteApi.GetListaPaciente();
    this.submitPacienteForm();
  }

  constructor(
    public fb: FormBuilder,
    private pacienteApi: PacienteService
  ) { }


  /* Reactive paciente form */
  submitPacienteForm() {
    this.pacienteForm = this.fb.group({
      nombre_paciente: ['', [Validators.required]],
      apellido_paciente: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      obra_social: ['', [Validators.required]],
      numero_os: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      telefono_contacto: ['', [Validators.required]]
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.pacienteForm.controls[controlName].hasError(errorName);
  }
  
  
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.pacienteForm.get('fecha_nacimiento').setValue(convertDate, {
      onlyself: true
    })
  }
  
  /* Reset form */
  resetForm() {
    this.pacienteForm.reset();
    Object.keys(this.pacienteForm.controls).forEach(key => {
      this.pacienteForm.controls[key].setErrors(null)
    });
  }

  /* Submit book */
  submitPaciente() {
    if (this.pacienteForm.valid){
      this.pacienteApi.AddPaciente(this.pacienteForm.value)
      this.resetForm();
    }
  }

}
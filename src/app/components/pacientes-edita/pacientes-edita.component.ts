import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { PacienteService } from './../../shared/paciente.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-pacientes-edita',
  templateUrl: './pacientes-edita.component.html',
  styleUrls: ['./pacientes-edita.component.css']
})

export class PacientesEditaComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  editPacienteForm: FormGroup;

  ngOnInit() {
    this.updatePacienteForm();
  }

  constructor(
    public fb: FormBuilder,
    private location: Location,
    private pacienteApi: PacienteService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');    
    this.pacienteApi.GetPaciente(id).valueChanges().subscribe(data => {
      this.editPacienteForm.setValue(data);      
      console.log(this.editPacienteForm);
    })
    
  }

  /* Update form */
  updatePacienteForm() {
    this.editPacienteForm = this.fb.group({
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
    return this.editPacienteForm.controls[controlName].hasError(errorName);
  }

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.editPacienteForm.get('fecha_nacimiento').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Go to previous page */
  goBack() {
    this.location.back();
  }

  /* Submit book */
  updatePaciente() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Seguro que desea actulizar datos?')) {
      this.pacienteApi.UpdatePaciente(id, this.editPacienteForm.value);
      this.router.navigate(['PacienteLista']);
    }
  }
}

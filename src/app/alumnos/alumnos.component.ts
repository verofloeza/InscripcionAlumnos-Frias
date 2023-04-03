import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(5)
    ]
    );

  apellidoControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(5)
    ]
    );

  emailControl = new FormControl(
    '',
    [
      Validators.email,
      Validators.required
    ]
    );

  nacimientoControl = new FormControl('');

  inscripcionGroup: FormGroup;

  constructor(public formBuilder: FormBuilder){
    this.inscripcionGroup = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email:this.emailControl,
      nacimiento:this.nacimientoControl,
      localizacion: this.formBuilder.group({
        direccion: [''],
        ciudad: [''],
        provincia:[''],
        cp:['']
      })
    });
  }

  onSubmit(): void {
    if(this.inscripcionGroup.valid){
      console.log(this.inscripcionGroup.value)
    }else{
      alert('El formulario no está completo')
    }
    
  }
}

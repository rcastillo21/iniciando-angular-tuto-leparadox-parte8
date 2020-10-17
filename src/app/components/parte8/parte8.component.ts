import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parte8',
  templateUrl: './parte8.component.html',
  styleUrls: ['./parte8.component.scss']
})
export class Parte8Component {

  signunpForm: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {
    this.signunpForm = this._builder.group({
      nombre: [''],
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    });
   }

  enviar(values) {
    console.log(values);
  }

}

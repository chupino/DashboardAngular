
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-box-crendential',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './box-crendential.component.html',
  styleUrl: './box-crendential.component.css'
})
export class BoxCrendentialComponent {
  loginForm = new FormGroup({
    email: new FormControl('', {validators: [Validators.email, Validators.required]}),
    password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]})
  })
}

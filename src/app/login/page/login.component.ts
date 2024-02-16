import { Component } from '@angular/core';
import { BoxCrendentialComponent } from '../components/box-crendential/box-crendential.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BoxCrendentialComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

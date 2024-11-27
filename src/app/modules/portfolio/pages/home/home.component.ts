import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

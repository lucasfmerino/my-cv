import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TechnologiesComponent,
    ExperiencesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

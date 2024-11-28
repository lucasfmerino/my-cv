import { Component } from '@angular/core';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TechnologiesComponent,
    ExperiencesComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

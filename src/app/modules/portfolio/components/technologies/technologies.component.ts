import { Component, signal, WritableSignal } from '@angular/core';
import { Iicon } from '../../interface/icon.interface';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  public technologies: WritableSignal<Iicon[]> = signal<Iicon[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'java icon'
    },
    {
      src: 'assets/icons/knowledge/kotlin.svg',
      alt: 'kotlin icon'
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'spring icon'
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: 'sql icon'
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'docker icon'
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'git icon'
    },

  ])
}

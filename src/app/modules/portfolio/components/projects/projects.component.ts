import { Component, signal, WritableSignal } from '@angular/core';
import { IProjectDetails } from '../../interface/projectDetails.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects: WritableSignal<IProjectDetails[]> = signal<IProjectDetails[]>([
    {
      src: '/assets/img/projects/project-heimd4ll.png',
      alt: 'Projeto Heimd4ll',
      title: 'Heimd4ll - Inteligência em Dados',
      width: '200',
      // height: '183px',
      description: '<p>Este projeto tem o objetivo de trazer funcionalidades que beneficiam gestão da produçao e o controle de processos</p> <p>Com esse sistema, é possível cadastrar os itens e seus roteiros de produção, gerar os romaneios de inspeção, ordens de produção e emitir relatórios.</p>',
      links: [
        {
          name: 'Conheça a Heimd4ll',
          href: '#'
        }
      ]
    }
  ])
}

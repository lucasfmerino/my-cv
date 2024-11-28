import { Component, signal, WritableSignal } from '@angular/core';
import { IExperienceDetails } from '../../interface/experienceDetails.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public experiences: WritableSignal<IExperienceDetails[]> = signal<IExperienceDetails[]>([
    {
      summary: {
        strong: "Desenvolvedor back-end Java",
        position: "Freelancer | jan 2024 - Present"
      },
      description: "<p>Desenvolvimento de aplicações web;</p><p>Soluções para otimização de processos;</p><p>Criação e design de sistemas;</p><p>Coordenar equipes de tecnologia.</p>"
    },
    {
      summary: {
        strong: "Software Engineer",
        position: "Fairy | mai 2023 - dez 2023"
      },
      description: "<p>Arquitetura e design de sistemas;</p><p>Gestão de requisitos;</p><p>Padrões de porjeto;</p><p>Banco de dados;</p><p>Testes de software;</p><p>Gestão de projetos;</p><p>Infraestrutura e deploy.</p>"
    },

  ])
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJETOS, Projeto } from './projetos.data';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  projetos: Projeto[] = PROJETOS;
}

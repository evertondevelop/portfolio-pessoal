import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTATO_LINKS } from './contato.data';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  contatoLinks = CONTATO_LINKS;
}

import { Component } from '@angular/core';
import { HISTORIA_PARAGRAPHS } from './historia.data';

@Component({
  selector: 'app-historia',
  standalone: true,
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {
  historia = HISTORIA_PARAGRAPHS;
}

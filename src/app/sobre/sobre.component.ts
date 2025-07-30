import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SOBRE_PARAGRAPH, SOBRE_LINKS } from './sobre.data';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  typedName$!: Observable<string>;
  sobreParagraph = SOBRE_PARAGRAPH;
  sobreLinks = SOBRE_LINKS;

  private typedNameSubject = new BehaviorSubject<string>('');

  constructor() {
    this.typedName$ = this.typedNameSubject.asObservable();
    this.startTypedName();
  }

  private startTypedName() {
    const name = "Weverton Ferreira";
    let current = '';
    let i = 0;
    const type = () => {
      if (i <= name.length) {
        current = name.substring(0, i);
        this.typedNameSubject.next(current);
        i++;
        setTimeout(type, 120);
      }
    };
    type();
  }
}

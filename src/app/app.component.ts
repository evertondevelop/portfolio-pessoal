import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from './sobre/sobre.component';
import { HistoriaComponent } from './historia/historia.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { StacksComponent } from './stacks/stacks.component';
import { SoftskillsComponent } from './softskills/softskills.component';
import { ContatoComponent } from './contato/contato.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SobreComponent, HistoriaComponent, ProjetosComponent, StacksComponent, SoftskillsComponent, ChatbotComponent, ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  showScrollTopBtn = false;

  constructor() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;
    this.showScrollTopBtn = (scrollY + windowH > docH - 400);
  };

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}

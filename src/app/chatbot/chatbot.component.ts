import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  messages = [
    { from: 'bot', text: 'Olá! Como posso ajudar você hoje?', date: new Date() },
    { from: 'user', text: 'Quero saber mais sobre seu portfólio.', date: new Date() },
    { from: 'bot', text: 'Claro! Posso te mostrar meus projetos, stacks ou formas de contato. O que deseja?', date: new Date() }
  ];
  userInput = '';

  private scrollToBottom() {
    setTimeout(() => {
      const container = document.querySelector('.custom-scroll');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  }

  sendMessage(event?: Event) {
    if (event) event.preventDefault();
    if (this.userInput.trim()) {
      this.messages.push({ from: 'user', text: this.userInput, date: new Date() });
      this.scrollToBottom();
      setTimeout(() => {
        this.messages.push({ from: 'bot', text: 'Mensagem recebida! (Apenas layout)', date: new Date() });
        this.scrollToBottom();
      }, 600);
      this.userInput = '';
    }
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}

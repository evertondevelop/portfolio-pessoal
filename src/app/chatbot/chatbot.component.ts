import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  private readonly mainlyBotMessage = `
    Olá, tudo bem? Eu sou o chatbot do Weverton e em breve estarei disponível para ajudar você a encontrar informações sobre suas experiências em projetos e habilidades técnicas.
  `;
  private readonly responseBotMessage = `
    Obrigado por interagir comigo. Assim que eu estiver pronto, poderei responder às suas perguntas e fornecer informações úteis.`;

  messages = [
    { from: 'bot', text: this.mainlyBotMessage, date: new Date() },
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
        this.messages.push({ from: 'bot', text: this.responseBotMessage, date: new Date() });
        this.scrollToBottom();
      }, 600);
      this.userInput = '';
    }
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}

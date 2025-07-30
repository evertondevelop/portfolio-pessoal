import { Component, OnInit, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stacks',
  standalone: true,
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit, AfterViewInit {
  stacks = [
    // Backend/.NET/Azure/DevOps
    { id: 1, name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { id: 2, name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { id: 3, name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { id: 4, name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { id: 5, name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { id: 6, name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { id: 7, name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { id: 8, name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
    { id: 9, name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { id: 10, name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    { id: 11, name: 'NoSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { id: 12, name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' }
  ];

  stacksCarrossel: any[] = [];
  stackCarouselTranslate = 0;
  isStackCarouselPaused = false;
  private stackCarouselSpeed = 1; // pixels por frame
  private stackCarouselReqId: number | null = null;
  private stackItemWidth = 180; // px (aprox. min-w + gap)
  private nextStackId = 9;

  ngOnInit() {
    // Inicializa com duas cópias, cada uma com ids únicos
    this.stacksCarrossel = [
      ...this.stacks.map(stack => ({ ...stack })),
      ...this.stacks.map(stack => this._withNextId(stack)),
      ...this.stacks.map(stack => this._withNextId(stack))
    ];
  }

  ngAfterViewInit() {
    this.startStackCarousel();
  }

  private _withNextId(stack: any) {
    // Retorna uma cópia do stack com id único
    return { ...stack, id: this.nextStackId++ };
  }

  startStackCarousel() {
    if (this.stackCarouselReqId) return;
    const animate = () => {
      if (!this.isStackCarouselPaused) {
        this.stackCarouselTranslate -= this.stackCarouselSpeed;
        const totalWidth = this.stacks.length * this.stackItemWidth

        if (Math.abs(this.stackCarouselTranslate) > totalWidth) {
          this.stackCarouselTranslate = 0;
        }
      }
      this.stackCarouselReqId = requestAnimationFrame(animate);
    };
    this.stackCarouselReqId = requestAnimationFrame(animate);
  }

  pauseStackCarousel() {
    this.isStackCarouselPaused = true;
  }
  resumeStackCarousel() {
    this.isStackCarouselPaused = false;
  }
}

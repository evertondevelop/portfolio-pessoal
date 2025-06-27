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
    { id: 1, name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
    { id: 2, name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { id: 3, name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 4, name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { id: 5, name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { id: 6, name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 7, name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { id: 8, name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
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

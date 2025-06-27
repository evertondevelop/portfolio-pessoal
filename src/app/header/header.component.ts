import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isDarkMode = false;
  language = 'pt';

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }

  changeLanguage() {
    this.language =  this.language === 'pt' ? 'en' : 'pt';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOFT_SKILLS, BOAS_PRATICAS } from './softskills.data';

@Component({
  selector: 'app-softskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.scss'],
})
export class SoftskillsComponent {
  softSkills = SOFT_SKILLS;
  boasPraticas = BOAS_PRATICAS;
}

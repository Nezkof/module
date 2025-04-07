import { Component } from '@angular/core';

import { LetterFrequencyService } from './services/letter-frequency.service';
import { StringCheckerFormComponent } from './forms/string-cheker-form/string-cheker-form.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BarChartComponent } from './graphs/bar-chart/bar-chart.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    StringCheckerFormComponent,
    CommonModule,
    IonicModule,
    BarChartComponent,
    ReactiveFormsModule,
  ],
})
export class HomePage {
  frequencyData: Record<string, number> = {};

  constructor(private letterFrequencyService: LetterFrequencyService) {}

  onTextSubmitted(text: string) {
    this.frequencyData =
      this.letterFrequencyService.calculateLetterFrequency(text);
  }
}

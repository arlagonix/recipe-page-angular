import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoSectionComponent } from './info-section/info-section.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TextComponent } from './text/text.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleComponent,
    NgOptimizedImage,
    TextComponent,
    InfoSectionComponent,
    SubtitleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-page';
}

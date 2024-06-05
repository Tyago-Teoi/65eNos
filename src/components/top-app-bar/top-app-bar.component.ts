import { Component, Renderer2} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'top-app-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './top-app-bar.component.html',
  styleUrl: './top-app-bar.component.scss'
})
export class TopAppBarComponent {

  currentTheme = 'light-theme';

  constructor(private renderer: Renderer2) {}

  toggleContrast() {
    if (this.currentTheme === 'light-theme') {
      this.currentTheme = 'dark-theme';
    } else {
      this.currentTheme = 'light-theme';
    }
    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme: string) {
    const previousTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.renderer.removeClass(document.body, previousTheme);
    this.renderer.addClass(document.body, theme);
  }

}

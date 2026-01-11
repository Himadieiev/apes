import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, BurgerMenuComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {}

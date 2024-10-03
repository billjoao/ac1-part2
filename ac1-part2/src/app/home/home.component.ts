import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBanner: boolean = true; // Inicialmente, o banner está visível

  toggleBanner() {
    this.showBanner = !this.showBanner; // Alterna entre true e false
  }
}

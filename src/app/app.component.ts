import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Estoque';
  catego: boolean = false;
  produto: boolean = false;
  categoria(){
    this.catego = !this.catego;
  }
  produtos(){
    this.produto = !this.produto;
  }
}

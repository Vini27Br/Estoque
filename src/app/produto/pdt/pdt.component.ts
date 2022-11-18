import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdt',
  templateUrl: './pdt.component.html',
  styleUrls: ['./pdt.component.scss']
})
export class PdtComponent implements OnInit {

  Produtos: Produto[] = [
    {id: 1, categoria: 'Sorvete'},
    {id: 2, categoria: 'Leite'},
    {id: 3, categoria: 'Picanha'},
    {id: 4, categoria: 'Fita adesiva'},
    {id: 5, categoria: 'Alvejante'}



  ]

  constructor() { }

  ngOnInit(): void {
  }

}

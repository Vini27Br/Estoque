import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-pdt',
  templateUrl: './pdt.component.html',
  styleUrls: ['./pdt.component.scss']
})
export class PdtComponent implements OnInit {

  Produtos: Produto[] = [
    {id: 1, produto: 'Sorvete'},
    {id: 2, produto: 'Leite'},
    {id: 3, produto: 'Picanha'},
    {id: 4, produto: 'Fita adesiva'},
    {id: 5, produto: 'Alvejante'}


  ];
  displayedColumns: string[] = ['id', 'produto'];

  constructor() { }

  ngOnInit(): void {
  }

}

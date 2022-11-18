import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-ctg',
  templateUrl: './ctg.component.html',
  styleUrls: ['./ctg.component.scss']
})
export class CtgComponent implements OnInit {

  Categorias: Categoria[] = [
    {id: 1, categoria: 'Frios'},
    {id: 2, categoria: 'Bebidas'},
    {id: 3, categoria: 'Carnes'},
    {id: 4, categoria: 'Utilidades'},
    {id: 5, categoria: 'Limpeza'}


  ];
  displayedColumns: string[] = ['id', 'categoria'];

  constructor() { }

  ngOnInit(): void {
  }

}

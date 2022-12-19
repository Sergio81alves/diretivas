import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  constructor() { }
  public produtos: any = []
  ngOnInit(): void {
    this.produtos.push(
      {
        id: 1,
        nome: 'Banana',
        descricao: 'nanica',
        valor: 5.5
      },
      {
        id: 2,
        nome: 'maçã',
        descricao: 'bola',
        valor: 3.2
      }
    )
  }

}

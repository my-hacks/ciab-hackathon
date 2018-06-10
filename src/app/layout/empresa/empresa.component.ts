import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  animations: [routerTransition()]
})
export class EmpresaComponent implements OnInit {

  ngOnInit() {
  }

  rows = [];
  selected = [];

  pesquisaFinalizada:boolean = false
  profissionais:Array<JSON>
  detalheSolicitado:boolean = false
  detalheProfissional:any

  urlRoot:string = "assets/data/"

  constructor(private http: HttpClient) {

    this.http.get("https://api.gesta.me/v1/service").subscribe((data:any) => {
      this.rows = data;
    })

  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }

  pesquisar(){

    this.pesquisaFinalizada = true

    let url:string = this.urlRoot + "profissionais.json"

    this.http.get(url, {}).subscribe((data:Array<JSON>) => {

      console.log(data)
      this.profissionais = data

    })

  }

  mostraDetalheProfissional(profissional){

    this.detalheSolicitado = true
    this.detalheProfissional = profissional

  }

}

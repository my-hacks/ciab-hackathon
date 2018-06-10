import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

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
  descricao:any
  dateDelivery:any

  constructor(private http: HttpClient, private toastr: ToastrService) {

    this.http.get("https://api.gesta.me/v1/service").subscribe((data:any) => {
      this.rows = data;
    })

  }

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
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

    this.http.post("https://api.gesta.me/v1/provider", this.selected).subscribe((data:Array<JSON>) => {

      // this.profissionais = data

      let persons:Array<JSON> = []
      let foundSkills:number = 0

      data.forEach((personValue, personIndex) => {

        this.selected.forEach((servicoSelectValue, servicoSelectIndex) => {

          personValue.services.forEach((serviceValue, serviceIndex) => {

            if(servicoSelectValue.title == serviceValue.title){
              foundSkills++
            }

          })

        })

        if(foundSkills == this.selected.length){
          persons.push(personValue)
        }
        foundSkills = 0

        console.log(persons)

        this.profissionais = persons

      })

    })

  }

  mostraDetalheProfissional(profissional){

    this.detalheSolicitado = true
    this.detalheProfissional = profissional

  }

  enviarProposta(){

    this.toastr.success('Proposta Analisada!', this.descricao);

    let superFuckerJSON = {
      id_provider: this.detalheProfissional.id,
      description: this.descricao,
      date_delivery: this.dateDelivery
    }

    this.http.post("https://api.gesta.me/v1/order", superFuckerJSON).subscribe((data) => {

      console.log("enviarProposta")
      console.log(data)

    })

  }

}

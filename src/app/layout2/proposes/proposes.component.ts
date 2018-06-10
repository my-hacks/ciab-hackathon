import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";

@Component({
    selector: 'app-proposes',
    templateUrl: './proposes.component.html',
    styleUrls: ['./proposes.component.scss']
})
export class ProposesComponent implements OnInit {
    
    constructor(private http: HttpClient) {
        this.recuperaPropostas()
    }

    propostas:Array<JSON>

    ngOnInit(): void {
    
    }

    heading = 'Propostas';

    recuperaPropostas(){

        this.http.get("https://api.gesta.me/v1/order").subscribe((data:Array<JSON>) => {
            this.propostas = data
        })

    }

    aceitarProposta(proposta){

        console.log(proposta)

        proposta.status = 'accept'
        
        this.http.post('https://api.gesta.me/v1/order/update', proposta).subscribe((data) => {

            console.log('enviado')

        }) 

    }

}

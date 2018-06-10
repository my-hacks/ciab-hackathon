import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule, PageHeaderModule } from '../../shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';

import { BsComponentModule } from '../bs-component/bs-component.module';
import { PagamentoComponent } from './pagamento.component';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        PagamentoRoutingModule,
        StatModule,
        NgxDatatableModule,
        PageHeaderModule,
        BsComponentModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        }),
        FormsModule
    ],
    declarations: [
        PagamentoComponent
    ]
})
export class PagamentoModule { }

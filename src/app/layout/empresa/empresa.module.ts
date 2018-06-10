import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';

import { StatModule } from '../../shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        EmpresaRoutingModule,
        StatModule,
        NgxDatatableModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        }),
        FormsModule
    ],
    declarations: [
        EmpresaComponent
    ]
})
export class EmpresaModule {}

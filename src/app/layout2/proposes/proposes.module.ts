// import { FormModule } from './../../layout/form/form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { StatModule } from '../../shared';

import { ProposesRoutingModule } from './proposes-routing.module';
import { ProposesComponent } from './proposes.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ProposesRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [
        ProposesComponent
    ]
})
export class ProposesModule { }

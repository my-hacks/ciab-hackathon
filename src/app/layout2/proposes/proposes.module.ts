import { FormModule } from './../../layout/form/form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { StatModule } from '../../shared';

import { ProposesRoutingModule } from './proposes-routing.module';
import { ProposesComponent } from './proposes.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ProposesRoutingModule,
        PageHeaderModule,
        FormModule
    ],
    declarations: [
        ProposesComponent
    ]
})
export class ProposesModule { }

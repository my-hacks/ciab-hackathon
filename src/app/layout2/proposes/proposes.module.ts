import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { StatModule } from '../../shared';

import { ProposesRoutingModule } from './proposes-routing.module';
import { ProposesComponent } from './proposes.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ProposesRoutingModule
    ],
    declarations: [
        ProposesComponent
    ]
})
export class ProposesModule { }

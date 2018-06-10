import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../../shared';
import { WorksComponent } from './works.component';
import { WorksRoutingModule } from '../works/works.routing.module';
import { BsComponentModule } from '../../layout/bs-component/bs-component.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        PageHeaderModule,
        WorksRoutingModule,
        BsComponentModule
    ],
    declarations: [
        WorksComponent
    ]
})
export class WorksModule { }

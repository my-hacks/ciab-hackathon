import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposesComponent } from './proposes.component';


const routes: Routes = [
    {
        path: '', component: ProposesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProposesRoutingModule {
}

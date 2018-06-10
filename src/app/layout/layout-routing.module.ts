import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'empresa' },
            { path: 'empresa', loadChildren: './empresa/empresa.module#EmpresaModule'},
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'pagamentos', loadChildren: './pagamento/pagamento.module#PagamentoModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

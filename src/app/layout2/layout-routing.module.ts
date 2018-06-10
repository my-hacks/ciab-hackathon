import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'empresa', loadChildren: './empresa2/empresa.module#EmpresaModule'},
            { path: 'dashboard', loadChildren: './dashboard2/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts2/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables2/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form2/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element2/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid2/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component2/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page2/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

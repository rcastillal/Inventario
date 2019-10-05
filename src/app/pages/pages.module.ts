import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        GraficasComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
      ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        GraficasComponent
    ],
    providers: [],
})
export class PagesModule { }
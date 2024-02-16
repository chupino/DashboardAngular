import { Routes } from '@angular/router';
import { LoginComponent } from './login/page/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/page/dashboard.component';
import { SearchComponentComponent } from './dashboard/components/search-component/search-component.component';
import { HistoryComponent } from './dashboard/components/history/history.component';
import { HomeComponent } from './dashboard/components/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: DashboardComponent,
        children:[
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'search',
                component: SearchComponentComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            },
        ]
    },
    {
        path:'login',
        component: LoginComponent
    },

];

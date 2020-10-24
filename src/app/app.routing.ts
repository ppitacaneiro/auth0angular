import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const appRoutes = [
    { path: 'home', component: HomeComponent},
    { path: 'precios', component: PreciosComponent},
    { path: 'protegida', component: ProtegidaComponent},
    { path: '**', redirectTo:'home',  pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
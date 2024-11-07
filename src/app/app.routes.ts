import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'app', component: AppComponent }, 
    { path: 'cliente', component: ClienteComponent }, 
    { path: 'fornecedor', component: FornecedorComponent }, 
    { path: '', redirectTo: '/cliente', pathMatch: 'full' }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
}) 

export class AppRoutingModule { }


import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { AdminStatsComponent } from './admin/admin-stats/admin-stats.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'stats', component: AdminStatsComponent },
      { path: '**', component: AdminHomeComponent },
    ]
  },
  {
    path: 'customer', component: CustomerComponent,
    children: [
      { path: 'customer-home', component: CustomerHomeComponent },
      { path: '**', component: CustomerHomeComponent }
    ]
  },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

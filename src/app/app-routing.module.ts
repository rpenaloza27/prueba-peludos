import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { PlannerComponent } from './pages/planner/planner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',
    component:HomeComponent
  },
  { 
    path:"planner",
    component:PlannerComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

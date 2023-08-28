import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InformationComponent} from "./information/information.component";

const routes: Routes = [
  { path: 'informations/:filename', component: InformationComponent },
  { path: '', redirectTo: 'informations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

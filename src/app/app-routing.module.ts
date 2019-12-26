import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitsComponent } from './components/commits/commits.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'commits'
  },
  {
    path: 'commits',
    component: CommitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

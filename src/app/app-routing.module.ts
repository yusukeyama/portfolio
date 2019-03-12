import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'contents', component: ContentsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

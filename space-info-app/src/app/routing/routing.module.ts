import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LaunchesComponent } from '../launches/launches.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'launches', component: LaunchesComponent},
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/containers';
import { HoursPageComponent } from './modules/hours/containers';
import { TasksPageComponent } from './modules/tasks/containers';
import { WorkersPageComponent } from './modules/workers/containers';
import { LoginPageComponent } from './modules/login/containers';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'hours', component: HoursPageComponent },
  { path: 'tasks', component: TasksPageComponent },
  { path: 'workers', component: WorkersPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

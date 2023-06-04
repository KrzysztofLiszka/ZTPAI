import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/containers';
import { HoursPageComponent } from './modules/hours/containers';
import { WorkersPageComponent } from './modules/workers/containers';
import { LoginPageComponent, RegisterPageComponent } from './modules/auth/containers';
import { AssignmentsPageComponent } from './modules/assignments/containers';

const routes: Routes = [
    { path: '', component: HoursPageComponent },
    { path: 'hours', component: HoursPageComponent },
    { path: 'assignments', component: AssignmentsPageComponent },
    { path: 'workers', component: WorkersPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

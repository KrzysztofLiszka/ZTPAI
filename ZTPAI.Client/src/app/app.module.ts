import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './modules/home/home.module';
import { WorkersModule } from './modules/workers/workers.module';
import { HoursModule } from './modules/hours/hours.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { MaterialModule } from './modules/material/material.module';
import { AssignmentsModule } from './modules/assignments/assignment.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HomePageModule,
        WorkersModule,
        AssignmentsModule,
        HoursModule,
        AuthModule,
        HttpClientModule,
        SharedModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

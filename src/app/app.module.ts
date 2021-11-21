import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { WhySectionComponent } from './components/why-section/why-section.component';
import { PlansSectionComponent } from './components/plans-section/plans-section.component';
import { ClubSectionComponent } from './components/club-section/club-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    BannerHomeComponent,
    WhySectionComponent,
    PlansSectionComponent,
    ClubSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

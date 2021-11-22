import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { MaterialCModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { WhySectionComponent } from './components/why-section/why-section.component';
import { PlansSectionComponent } from './components/plans-section/plans-section.component';
import { ClubSectionComponent } from './components/club-section/club-section.component';
import { CotizeSectionComponent } from './components/cotize-section/cotize-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layouts/footer/footer.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './components/stepper/stepper.component';
import { FooterPlanComponent } from './components/footer-plan/footer-plan.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    BannerHomeComponent,
    WhySectionComponent,
    PlansSectionComponent,
    ClubSectionComponent,
    CotizeSectionComponent,
    FooterComponent,
    PlannerComponent,
    StepperComponent,
    FooterPlanComponent,
    CotizacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

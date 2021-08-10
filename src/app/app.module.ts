import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { EmployeesComponent } from './employees/components/employees.component';
import { AboutComponent } from './about/about.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    EmployeesComponent,
    AboutComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    ColorizerDirective,
    CebComponent,
    CpbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  // AppModule should inturn be bootstrapped with a comp -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }

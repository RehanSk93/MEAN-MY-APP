import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AngularFormsComponent } from './features/angular-forms/angular-forms.component';
import { ReactiveFormComponent } from './features/angular-forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './features/angular-forms/template-driven-form/template-driven-form.component';
import { BasicFormComponent } from './features/angular-forms/reactive-form/basic-form/basic-form.component';
import { AngularPipesComponent } from './features/angular-pipes/angular-pipes.component';
import { AngularDirectivesComponent } from './features/angular-directives/angular-directives.component';
import { AngularCrudAppComponent } from './features/angular-crud-app/angular-crud-app.component';
import { NodeBackendComponent } from './features/angular-crud-app/node-backend/node-backend.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AngularFormsComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    BasicFormComponent,
    AngularPipesComponent,
    AngularDirectivesComponent,
    AngularCrudAppComponent,
    NodeBackendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

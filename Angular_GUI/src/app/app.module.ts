import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { AutoCompleteDropdownComponent } from './features/auto-complete-dropdown/auto-complete-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchItemsComponent } from './features/search-items/search-items.component';
import { AppHighlightDirective } from './features/search-items/app-highlight.directive';
import { AngularFormsComponent } from './features/angular-forms/angular-forms.component';
import { ReactiveFormComponent } from './features/angular-forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './features/angular-forms/template-driven-form/template-driven-form.component';
import { BasicFormComponent } from './features/angular-forms/reactive-form/basic-form/basic-form.component';
import { AngularPipesComponent } from './features/angular-pipes/angular-pipes.component';
import { AngularDirectivesComponent } from './features/angular-directives/angular-directives.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    AutoCompleteDropdownComponent,
    SearchItemsComponent,
    AppHighlightDirective,
    AngularFormsComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    BasicFormComponent,
    AngularPipesComponent,
    AngularDirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AngularFormsComponent } from './features/angular-forms/angular-forms.component';
import { ReactiveFormComponent } from './features/angular-forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './features/angular-forms/template-driven-form/template-driven-form.component';
import { BasicFormComponent } from './features/angular-forms/reactive-form/basic-form/basic-form.component';
import { AngularPipesComponent } from './features/angular-pipes/angular-pipes.component';
import { AngularDirectivesComponent } from './features/angular-directives/angular-directives.component';
import { AngularCrudAppComponent } from './features/angular-crud-app/angular-crud-app.component';
import { NodeBackendComponent } from './features/angular-crud-app/node-backend/node-backend.component';
import { FormArrayComponent } from './features/angular-forms/form-array/form-array.component';
import { BasicFormArrayComponent } from './features/angular-forms/form-array/basic-form-array/basic-form-array.component';
import { RxjsOperatorsComponent } from './features/rxjs-operators/rxjs-operators.component';
import { BasicSubjectComponent } from './features/rxjs-operators/subject-behavior-subject/basic-subject/basic-subject.component';
import { FormEventComponent } from './features/rxjs-operators/form-event/form-event.component';
import { SubjectBehaviorSubjectComponent } from './features/rxjs-operators/subject-behavior-subject/subject-behavior-subject.component';
import { HowToComponent } from './features/how-to/how-to.component';
import { ChildOneComponent } from './features/rxjs-operators/subject-behavior-subject/basic-subject/child-one/child-one.component';
import { ChildTwoComponent } from './features/rxjs-operators/subject-behavior-subject/basic-subject/child-two/child-two.component';
import { ChildThreeComponent } from './features/rxjs-operators/subject-behavior-subject/basic-subject/child-three/child-three.component';
import { RxjsBasicTheoryComponent } from './features/rxjs-operators/subject-behavior-subject/rxjs-basic-theory/rxjs-basic-theory.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AngularFormsComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    BasicFormComponent,
    AngularPipesComponent,
    AngularDirectivesComponent,
    AngularCrudAppComponent,
    NodeBackendComponent,
    FormArrayComponent,
    BasicFormArrayComponent,
    HowToComponent,
    RxjsOperatorsComponent,
    FormEventComponent,
    SubjectBehaviorSubjectComponent,
    BasicSubjectComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    RxjsBasicTheoryComponent
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

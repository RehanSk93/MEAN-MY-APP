import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AngularFormsComponent } from './features/angular-forms/angular-forms.component';
import { ReactiveFormComponent } from './features/angular-forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './features/angular-forms/template-driven-form/template-driven-form.component';
import { AngularPipesComponent } from './features/angular-pipes/angular-pipes.component';
import { AngularDirectivesComponent } from './features/angular-directives/angular-directives.component';
import { AngularCrudAppComponent } from './features/angular-crud-app/angular-crud-app.component';
import { NodeBackendComponent } from './features/angular-crud-app/node-backend/node-backend.component';
import { FormArrayComponent } from './features/angular-forms/form-array/form-array.component';
import { RxjsOperatorsComponent } from './features/rxjs-operators/rxjs-operators.component';
import { SubjectBehaviorSubjectComponent } from './features/rxjs-operators/subject-behavior-subject/subject-behavior-subject.component';
import { FormEventComponent } from './features/rxjs-operators/form-event/form-event.component';
import { HowToComponent } from './features/how-to/how-to.component';
import { PromiseComponent } from './features/rxjs-operators/promise/promise.component';
import { PluckComponent } from './features/rxjs-operators/pluck/pluck.component';
import { ToArrayComponent } from './features/rxjs-operators/to-array/to-array.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'how-to', component: HowToComponent },
  {
    path: 'rxjs-operators',
    component: RxjsOperatorsComponent,
    children: [
      {
        path: 'subject-behaviorSubject',
        component: SubjectBehaviorSubjectComponent,
      },
      {
        path: 'form-event',
        component: FormEventComponent,
      },
      {
        path: 'promise',
        component: PromiseComponent,
      },
      {
        path: 'pluck',
        component: PluckComponent,
      },
      {
        path: 'toArray',
        component: ToArrayComponent,
      },
    ],
  },
  {
    path: 'angular-forms',
    component: AngularFormsComponent,
    children: [
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
      },
      {
        path: 'template-driven-form',
        component: TemplateDrivenFormComponent,
      },
      {
        path: 'form-array',
        component: FormArrayComponent,
      },
    ],
  },
  { path: 'angular-pipes', component: AngularPipesComponent },
  { path: 'angular-directives', component: AngularDirectivesComponent },
  {
    path: 'angular-crud-app',
    component: AngularCrudAppComponent,
    children: [
      {
        path: 'node-backend',
        component: NodeBackendComponent,
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

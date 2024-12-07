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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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

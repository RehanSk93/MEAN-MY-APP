import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './shared/components/features/features.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AngularFormsComponent } from './features/angular-forms/angular-forms.component';
import { ReactiveFormComponent } from './features/angular-forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './features/angular-forms/template-driven-form/template-driven-form.component';
import { AngularPipesComponent } from './features/angular-pipes/angular-pipes.component';
import { AngularDirectivesComponent } from './features/angular-directives/angular-directives.component';

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
    ],
  },
  {path: 'angular-pipes', component: AngularPipesComponent},
  {path: 'angular-directives', component: AngularDirectivesComponent},
  { path: 'feature', component: FeaturesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

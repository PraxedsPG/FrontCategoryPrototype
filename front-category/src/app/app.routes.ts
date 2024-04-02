import { Routes } from '@angular/router';
import { ListCategoriesComponent } from './modules/components/list-categories/list-categories.component';
import { FormCategoriesComponent } from './modules/components/form-categories/form-categories.component';
import { HomeComponent } from './modules/components/home/home.component';

export const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'list', component: ListCategoriesComponent
  },
  {
    path: 'create', component: FormCategoriesComponent
  },
  {
    path: 'list/:id/upgrade', component: FormCategoriesComponent
  }
];

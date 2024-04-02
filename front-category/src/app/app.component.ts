import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';

import { ListCategoriesComponent } from "./modules/components/list-categories/list-categories.component";
import { FormCategoriesComponent } from "./modules/components/form-categories/form-categories.component";
import { HomeComponent } from './modules/components/home/home.component';
import { HeaderComponent } from './modules/components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, RouterLink, ListCategoriesComponent, FormCategoriesComponent, HomeComponent, HeaderComponent]
})
export class AppComponent {
  title = 'front-category';
}

import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../../shared/models/category';
import { CategoryService } from '../../../core/services/category.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements OnInit {
  private categoryService = inject(CategoryService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadAll();
  }

  goCreate() {
    this.router.navigate(['/create']);
  }

  categories: Category[] = [];

  loadAll() {
    this.categoryService.listAll()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  deleteCategory(category: Category) {
    if(confirm('Deseja realmente deletar essa categoria?')) {
      this.categoryService.delete(category.id)
      .subscribe(() => {
        this.loadAll();
      });
      alert('Categoria excluída com sucesso!');
    } else {
      alert('Deleção cancelada!');
    }
  }
}

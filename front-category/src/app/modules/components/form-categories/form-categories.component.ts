import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../shared/models/category';

@Component({
  selector: 'app-form-categories',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './form-categories.component.html',
  styleUrl: './form-categories.component.css'
})
export class FormCategoriesComponent implements OnInit {

  private formB = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private categoryService = inject(CategoryService);

  form?: FormGroup;
  category?: Category;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
    this.categoryService.getById(id)
      .subscribe(category => {
       this.category = category;
         this.form = this.formB.group({
            name: [category.name,[Validators.required]],
            type: [category.type,[Validators.required]]
         });
      })
    } else {
      this.form = this.formB.group({
       name: ['', [Validators.required]],
       type: ['', [Validators.required]],
     });
    }
   }

   save() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const categoryForm = this.form!.value;

    if (this.category) {
      this.categoryService.update(this.category.id, categoryForm)
      .subscribe(() => {
        this.router.navigate(['/list']);
    });

    } else {
      this.categoryService.create(categoryForm)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  }

}

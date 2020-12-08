import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
})
export class ArticleCreateComponent {
  public articleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createArticle();
  }

  createArticle() {
    this.articleForm = this.formBuilder.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      hidden: [false, Validators.required],
    });
  }

  onSubmit() {
    console.log('Article is ', this.articleForm.value);
  }
}

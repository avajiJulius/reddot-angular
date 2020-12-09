import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../../article/article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
})
export class ArticleCreateComponent {
  public articleForm: FormGroup;
  public article: Article;
  public message = null;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService
  ) {
    this.createArticleForm();
  }

  createArticleForm() {
    this.articleForm = this.formBuilder.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      hidden: [false, Validators.required],
    });
  }

  onSubmit() {
    this.createArticle();
  }

  private createArticle() {
    this.article = Object.assign({}, this.articleForm.value);
    this.articleService.createArticleWithNotify(this.article).subscribe(
      (notify: any) => {
        this.message = notify.msg;
      },
      (err) => {
        this.message = err.msg;
      }
    );
  }
}

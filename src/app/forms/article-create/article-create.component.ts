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
    let isCreated = this.createArticle();
    this.sendMessageOnCreate(isCreated);
  }

  private createArticle(): boolean {
    this.article = Object.assign({}, this.articleForm.value);
    return this.articleService.createArticle(this.article);
  }

  private sendMessageOnCreate(isCreated: boolean) {
    if (isCreated) {
      this.message = 'Successful created article!';
    } else {
      this.message = 'Article with this title already exist!';
    }
  }
}

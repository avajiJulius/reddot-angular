import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleCardComponent } from './article/article-card/article-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleCreateComponent } from './forms/article-create/article-create.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { ArticleService } from './services/article.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    ArticleListComponent,
    ArticleCreateComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ArticleService, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

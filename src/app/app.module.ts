import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleCardComponent } from './article/article-card/article-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleCreateComponent } from './article/article-create/article-create.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleCardComponent,
    ArticleCreateComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

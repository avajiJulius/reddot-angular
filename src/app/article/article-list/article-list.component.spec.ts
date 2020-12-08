import { ArticleListComponent } from './article-list.component';

describe('ArticleListComponent', () => {
  it('should have articles instantiated on ngInit', () => {
    const articleListComponent = new ArticleListComponent();
    expect(articleListComponent.articles).toBeUndefined();
    articleListComponent.ngOnInit();
    expect(articleListComponent.articles).toHaveSize(3);
  });

  it('should up and down rating in article on action', () => {
    const articleListComponent = new ArticleListComponent();
    articleListComponent.ngOnInit();
    expect(articleListComponent.articles[0].rate).toEqual(12);
    expect(articleListComponent.articles[1].rate).toEqual(1003);
    expect(articleListComponent.articles[2].rate).toEqual(100);
    articleListComponent.onRateUp(articleListComponent.articles[2]);
    expect(articleListComponent.articles[2].rate).toEqual(101);
    articleListComponent.onRateDown(articleListComponent.articles[2]);
    expect(articleListComponent.articles[2].rate).toEqual(100);
  });
});

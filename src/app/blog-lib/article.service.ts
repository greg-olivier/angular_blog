import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from './article';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ArticleService {
    idCount: number;

    constructor(private httpClient: HttpClient) {
        this.idCount = 50;
    }

    public list(): Observable<Article[]> {
        return this.httpClient.get<Array<Article>>('./assets/articles.json');
    }

    public update(article: Article): Observable<Article> {
        return Observable.of(JSON.parse(JSON.stringify(article)));
    }

    public create(article: Article): Observable<Article> {
        let newArticle = JSON.parse(JSON.stringify(article));
        newArticle.id = this.idCount++;
        return Observable.of(newArticle);
    }
}

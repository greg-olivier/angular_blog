import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ArticleService} from './article.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [NavbarComponent],
    providers: [
        ArticleService
    ],
    exports: [NavbarComponent, HttpClientModule]
})
export class BlogLibModule {
}

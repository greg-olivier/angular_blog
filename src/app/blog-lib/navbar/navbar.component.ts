import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ArticleService} from '../article.service';

export const
    NAV_HOME = 'home',
    NAV_LIST = 'list',
    NAV_CREATE = 'create',
    NAV_CONTACT = 'contact';

@Component({
    selector: 'blog-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Input() title: string;
    @Output() onNavigate: EventEmitter<string>;

    constructor(private articleService: ArticleService) {
        this.title = 'Defaut Title...';
        this.onNavigate = new EventEmitter();
    }

    navigate(path: string) {
        this.onNavigate.emit(path);
    }

}

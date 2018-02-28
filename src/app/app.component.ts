import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Article} from './article';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string;
    articles: Array<Article>;
    editing: boolean;
    editArticle: Article;
    showall: boolean;
    contact: boolean;

    constructor() {
        this.editing = false;
        this.showall = true;
        this.contact = false;
        this.editArticle = new Article(0, '');
        this.title = 'My First Angular Blog';
        this.articles = new Array();
        this.articles.push(new Article(99, 'Le monde merveilleux de oui-oui', 'Quisque blandit luctus quam,' +
            ' ut tincidunt lorem pretium eu. Nam enim massa, mollis vitae lacus ut, ' +
            'accumsan sodales lectus. Nullam eu elit quis magna imperdiet consequat in id eros. ' +
            'Duis at tellus non elit fermentum volutpat.'));
    }

    backToList() {
        setTimeout(() =>
            this.showAll());
    }

    showAll() {
        this.showall = true;
        this.editing = false;
        this.contact = false;
    }

    addArticle() {
        this.editing = true;
        this.showall = false;
        this.contact = false;
    }

    showContact() {
        this.editing = false;
        this.showall = false;
        this.contact = true;
    }

    saveArticle(myForm: NgForm) {
        this.articles.push(JSON.parse(JSON.stringify(this.editArticle)));
        myForm.resetForm();
    }

    modifyArticle(index: number) {
        this.editArticle = this.articles[index];
        this.addArticle();
    }
}


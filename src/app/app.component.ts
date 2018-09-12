import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Article} from './blog-lib/article';
import {ArticleService} from './blog-lib/article.service';
import {Contact} from './contact';
import {
    NAV_LIST,
    NAV_CREATE,
    NAV_CONTACT,
    NAV_HOME
} from './blog-lib/navbar/navbar.component';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title: string;
    articles: Array<Article>;
    editing: boolean;
    editArticle: Article;
    showall: boolean;
    showContact: boolean;
    contact: Contact;

    constructor(private articleService: ArticleService) {
        this.editing = false;
        this.showall = true;
        this.showContact = false;
        this.editArticle = new Article(0, '');
        this.title = 'My First Angular Blog';
        this.contact = new Contact();
        this.articles = new Array();
        this.articles.push(new Article(99, 'Le monde merveilleux de oui-oui', 'Quisque blandit luctus quam,' +
            ' ut tincidunt lorem pretium eu. Nam enim massa, mollis vitae lacus ut, ' +
            'accumsan sodales lectus. Nullam eu elit quis magna imperdiet consequat in id eros. ' +
            'Duis at tellus non elit fermentum volutpat.'));
    }

    ngOnInit(): void {
        this.articleService.list().subscribe({
            next: (articles) => {
                this.articles = articles;
            },
            error: (response) => {
                console.info('Impossible de récupérer les artciles dans le fichier JSON.', response);
            }
        });
    }

    backToList() {
        setTimeout(() =>
            this.showAll());
    }

    showAll() {
        this.showall = true;
        this.editing = false;
        this.showContact = false;
    }

    addArticle() {
        this.editing = true;
        this.showall = false;
        this.showContact = false;
    }

    displayContact() {
        this.editing = false;
        this.showall = false;
        this.showContact = true;
    }

    sendContact(myForm: NgForm) {
        console.info(this.contact);
        myForm.resetForm();
    }

    saveArticle(myForm: NgForm) {
        if (this.editArticle.id >= 0) {
            this.articleService.update(this.editArticle)
                .subscribe((article) => {
                    let index = this.articles.findIndex((value: Article) => value.id === article.id);
                    this.articles.splice(index, 1, article);
                });
        } else {
            this.articleService.create(this.editArticle)
                .subscribe((article) => this.articles.push(article));
        }
        this.editArticle.id = undefined;
        myForm.resetForm();

    }

    updateArticle(id: number, index: number) {
        this.editArticle = this.articles[index];
        this.addArticle();
    }

    deleteArticle(id: number, index: number) {
        this.articles.splice(index, 1);
    }

    nav(path: string) {
        if (path === NAV_HOME || path === NAV_LIST) {
            this.backToList();
        } else if (path === NAV_CREATE) {
            this.addArticle();
        } else if (path === NAV_CONTACT) {
            window.alert('No contact page yet... Coming soon sorry !');
        } else {
            console.error('Navigation path %s not managed by ion-blog...', path);
        }
    }

}

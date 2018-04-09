export class Article {

    id: number;
    title: string;
    description: string;
    date: Date;
    author: string;

    constructor(id: number, title: string, description?: string, author: string = 'Greg') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.date = new Date();
    }

}

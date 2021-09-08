import { Author } from "./author";

export class Book {
    
    constructor(public isbn: string, public title: string, public author: Author) {
    }
}
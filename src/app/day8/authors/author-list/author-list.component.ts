import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../../authors';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  authors = authors
  currentAuthor = authors[0]

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor
  }

  onDelete(author: Author) {
    this.authors = this.authors.filter((item: any) => item.id !== author.id);
    if (this.currentAuthor.id === author.id) {
      this.currentAuthor = this.authors[0]
    }
  }
}

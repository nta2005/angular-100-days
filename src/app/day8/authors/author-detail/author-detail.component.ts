import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../../authors';

@Component({
  selector: 'author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  @Input() author!: Author
  @Output() select = new EventEmitter<Author>()
  @Output() delete = new EventEmitter<Author>()

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(){
    this.select.emit(this.author);
  }

  handleDelete(){
    this.delete.emit(this.author);
  }

}

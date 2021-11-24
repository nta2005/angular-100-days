import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-day18',
  templateUrl: './day18.component.html',
  styleUrls: ['./day18.component.css']
})
export class Day18Component implements OnInit {

  newUser: User;

  constructor() {
    this.newUser = new User();
  }

  ngOnInit(): void {
  }

  currentDate = new Date()

  user = {
    name: 'An',
    age: 21
  }

  interval$ = interval(1000)

  addr = {
    address1: "123 Some St",
    address2: "STE100",
    city: "Acme",
    state: "State",
    zip: "12345",
    country: "US"
  }

  users: User[] = [
    {
      name: 'An',
      age: 21
    },
    {
      name: 'Đạt',
      age: 16
    },
    {
      name: 'Huy',
      age: 30
    }
  ]

  formatAddress(addr: any) {
    return (
      addr.address1 +
      " " +
      addr.address2 +
      ", " +
      addr.city +
      ", " +
      addr.state +
      " " +
      addr.zip +
      ", " +
      addr.country
    )
  }

  addUser() {
    this.users.push(this.newUser);
    this.newUser = new User();
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser];
    this.newUser = new User();
  }

}

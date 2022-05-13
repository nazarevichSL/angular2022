import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  constructor(private userServise: UserService) {
  }

  users: IUser[];

  ngOnInit(): void{
this.userServise.getUsers().subscribe(value => this.users=value);
  }
}



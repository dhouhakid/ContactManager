import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: string = "Hi Dhouha";
 imgAltText="user image"
  constructor() { }

  ngOnInit(): void {
  }

  getUser():string{
    return this.user;
  }
  isConnected = true;

}

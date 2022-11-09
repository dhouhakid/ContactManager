
import {Component, OnInit, Input} from '@angular/core';
import { Contact } from '../models/contact';
import { Output, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contact : Contact=new Contact(1,"Dhouha", "Kid", "dhouhakid@gmail.com",
  "Friend", "Amis", "1111111");
  @Input() index = 0;
  @Output() deleteEvent= new EventEmitter<number>();
  constructor() { }
  
  
  ngOnInit(): void {
  
  }
  deleteContact():void{
    let c = confirm("Voulez-vous supprimer le contact");
    if (c) {
      this.deleteEvent.emit(this.contact.id);
      //alert("contact supprimé");
    }else{
      alert("annulé")
    }
  
    }
}

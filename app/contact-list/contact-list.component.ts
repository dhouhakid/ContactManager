import { Component, Input ,OnInit } from '@angular/core';

import {Contact} from '../models/contact';




@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  user: string = "Hi Walid";
  isMarked = true;
  isMarked2 = false;
  
  
  constructor() { 
    this.setMarkContact();
    this.createContact();
    }
    listContacts: Array<Contact> = new Array<Contact>();
createContact() {
let contact = new Contact(2,"Walid", "HAMMAMI", "walid.ham@hotmail.com", 
"Friend", "Amis", "98559121");
this.listContacts.push(contact);
////*************** */
let contact1 = new Contact(3,"Dhouha", "Kid", "dhouhakid@gmail.com",
"Friend", "Amis", "1111111");
this.listContacts.push(contact1);
let contact2 = new Contact(4,"Yomna", "Haouel", "walid.ham@hotmail.com",
"Friend", "Amis", "222222");
this.listContacts.push(contact2);
//
let contact3 = new Contact(5,"Rihab", "Nasra", "walid.ham@hotmail.com",
"Family", "Famille", "33333333");
this.listContacts.push(contact3);
let contact4 = new Contact(6,"Hadil", "Saidi", "walid.ham@hotmail.com",
"Family", "Famille", "444444");
this.listContacts.push(contact4);
let contact5 = new Contact(7,"Louay", "Jadlaoui", "walid.ham@hotmail.com",
"Work", "Travaille", "55555555");
this.listContacts.push(contact5);
let contact6 = new Contact(8,"Iheb", "Mabrouki", "walid.ham@hotmail.com",
"Work", "Travaille", "666666");
this.listContacts.push(contact6);
}
    isFriendContact = true;
    isFamilyContact = false;
    isWorkContact = true;
    markContact: Record<string, boolean> = {};
    setMarkContact(){
    this.markContact={
    friendContact : this.isFriendContact,
    familyContact: this.isFamilyContact,
    workContact: this.isWorkContact
    }
    }
    
    

  ngOnInit(): void {
  }
  deleteContact(id:number):void{
    let index:number=-1;
    for(let c of this.listContacts){
      index = index+1;
      if(c.id==id){
      break;
      }
      
      }
      if(index!=-1){
      this.listContacts.splice(index,1);
      }
      }
    modifContact():void{
      let c = confirm("Voulez-vous modifier le contact");
      if (c) {
        alert("contact modifié");
      }else{
        alert("annulé")
      }
      }
      markContactStyle: Record<string, string> = {};
setMarkContactStyle() {
this.markContactStyle = {
'font-style': this.isFriendContact ? 'italic' : 'normal',
'font-weight': !this.isFamilyContact ? 'bold' : 'normal',
'font-size': this.isWorkContact ? '24px' : '12px'
}
}


      
}

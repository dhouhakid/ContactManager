export class Contact{
    firstName:string ;
    lastName:string;
    email:string;
    type:"Friend"|"Work"|"Family";
    description:string;
    phone:string;
    id:number;
    constructor(id:number,firstName: string,lastName: string,email:string,type: "Friend"|"Work"|"Family",description: string,phone: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type; 
        this.description = description;
        this.phone = phone;
        this.id=id;
        }
        }

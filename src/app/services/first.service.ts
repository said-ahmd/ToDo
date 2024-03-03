import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  messages: Array<any>=[]
  constructor() {
    this.init();
  }
  init(){
    this.insert({
      name:"ahmd",
      email:"ahmd@ahmd",
      message:"spring security"
    });
    this.insert({
      name:"said",
      email:"said@said",
      message:"spring boot"
    });
    this.insert({
      name:"tamer",
      email:"tamer@tamer",
      message:"spring mvc"
    })
  }
  insert(message:{name:string, email:string , message:string}) :void{
    this.messages.push(message);
  }
  getAllMaessages():any[]{
    return this.messages;
  }
  deleteMessage(index: number){
    this.messages.splice(index,1);
  }
}

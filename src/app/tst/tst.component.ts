import {Component, inject, Injectable} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MessageDetailsComponent} from "../message-details/message-details.component";
import {FirstService} from "../services/first.service";


@Component({
  selector: 'app-tst',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    MessageDetailsComponent
  ],
  templateUrl: './tst.component.html',
  styleUrl: './tst.component.css'
})
export class TstComponent {
  name: string ='';
  email: string = '';
  message: string = '';
  isSubmitted: boolean= false;
  users: Array<any> = [];
  private service2:FirstService = inject(FirstService);


  constructor(private service: FirstService) {
    this.users=this.service2.getAllMaessages();
    // this.isSubmitted= (this.users.length>0);
    console.log(this.users);
  }

  onSubmit() {
    this.isSubmitted=true;
    this.service2.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
  }

  deleteMessage(index: number) {
    this.service2.deleteMessage(index);
  }
}


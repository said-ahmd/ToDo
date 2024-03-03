import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-message-details',
  standalone: true,
  imports: [],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.css'
})
export class MessageDetailsComponent {
  @Input() usr!: any;
  @Input() index: number=-1;
  // here i create an emitter called deleteIndex and i will use it to emit the index of the message i want to delete.
  @Output() deleteIndex: EventEmitter<number> = new EventEmitter<number>();

  deletMessage() {
      this.deleteIndex.emit(this.index);
  }
}

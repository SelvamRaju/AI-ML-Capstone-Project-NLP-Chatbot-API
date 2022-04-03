import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-line-item',
  templateUrl: './chat-line-item.component.html',
  styleUrls: ['./chat-line-item.component.scss'],
})
export class ChatLineItemComponent implements OnInit {
  @Input() passMessage: any;
  now: string = '';

  constructor() {}

  ngOnInit(): void {
    this.now = new Date().toString().split(' ')[4];
  }
}

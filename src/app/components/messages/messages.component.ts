import { MessagesService } from './../../services/messages/messages.service';

import { Component, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  faTimes = faTimes;

  constructor(public messagesService: MessagesService) {}

  ngOnInit(): void {}
}
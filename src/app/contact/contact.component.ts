import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @Input() contact;
  constructor() {}

  ngOnInit() {}
}

export class Contact {
  "id": number;
  "name": string;
  "username": string;
  "email": string;
  "address": {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  "phone": string;
  "website": string;
  "company": {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

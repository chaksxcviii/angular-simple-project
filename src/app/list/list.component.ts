import { Component, OnInit } from "@angular/core";
import { Contact } from "../contact/contact.component";
import { ContactService } from "../contact/contact.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contacts = [];
  filtered = [];
  searchTerm = null;
  ngOnInit() {
    this.getContacts();
    this.contactService.tempSearchTerm.subscribe(term => {
      this.filtered = [];
      this.searchTerm = term;
      this.contacts.forEach(contact => {
        this.searchContact(term, contact);
      });
    });
  }

  getContacts() {
    this.contactService.getContacts().subscribe((res: Contact[]) => {
      res.forEach(contact => {
        this.contacts.push(contact);
      });
    });
  }

  searchContact(term, contact) {
    if (contact.name.toLowerCase().includes(term)) {
      this.filtered.push(contact);
    }
  }
}

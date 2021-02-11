import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ContactService } from "../contact/contact.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchInput: FormControl = new FormControl("");
  constructor(public contactService: ContactService) {}
  ngOnInit() {}

  setSearch($event) {
    this.contactService.setSearchTerm(this.searchInput.value);
  }

  clear() {
    this.contactService.setSearchTerm("");
    this.searchInput.setValue("");
  }
}

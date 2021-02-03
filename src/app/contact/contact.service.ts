import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  searchTerm = "";
  private searchTermSource = new BehaviorSubject<string>(this.searchTerm);
  tempSearchTerm = this.searchTermSource.asObservable();
  setSearchTerm(searchTerm: string) {
    this.searchTermSource.next(searchTerm);
  }

}

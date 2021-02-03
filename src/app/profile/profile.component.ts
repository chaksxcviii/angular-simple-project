import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contactCount = 0
  ngOnInit() {
    this.contactService.getContacts().subscribe((res:[])=>{
      this.contactCount = res.length
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  customerForm: FormGroup;
  customer: Customer = new Customer(); // data model
  ngOnInit() {
    this.customerForm = new FormGroup({  // Root FormGroup for the model
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)

    });
  }
}
class Customer{
  constructor(){}
}

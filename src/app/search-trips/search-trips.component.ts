import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-trips',
  templateUrl: './search-trips.component.html',
  styleUrls: ['./search-trips.component.css']
})
export class SearchTripsComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      fromCity: null,
      toCity: null,
      fastestCheapest: false
    });
  }
  save() {
    console.log(this.searchForm);
    console.log(`Saved: ${JSON.stringify(this.searchForm.value)}`);
  }
  populate() {
    this.searchForm.setValue(
      {
        firstName: 'David',
        lastName: 'Shams',
        email: 'me@gmail.com',
        sendCatalog: 'Yes'
    });
  }

  patchValue() {
    this.searchForm.patchValue(
      {
        firstName: 'David',
    });
  }

}

class Trips {
  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      firstName: null,
      lastName: null,
      email: null,
      sendCatalog: true
    })
  }

}

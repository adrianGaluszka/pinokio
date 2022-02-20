import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {

  constructor() {}
  newOfferForm = new FormGroup({
    url: new FormControl(''),
    nick: new FormControl(''),
    comment: new FormControl('')
  })


  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.newOfferForm.value);
  }
}

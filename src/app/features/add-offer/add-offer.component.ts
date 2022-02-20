import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder
  ) {}
  newOfferForm = this.fb.group({
    url: ['', [Validators.required, Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g)]],
    nick: ['', [Validators.required]],
    comment: ['', [Validators.required]]
  })

  ngOnInit(): void {}

  public onSubmit() {
    console.log(this.newOfferForm.value);
    this.db.list('offers').push(this.newOfferForm.value);
  }
}

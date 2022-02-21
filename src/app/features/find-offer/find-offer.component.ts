import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-find-offer',
  templateUrl: './find-offer.component.html',
  styleUrls: ['./find-offer.component.scss']
})


export class FindOfferComponent implements OnInit {

  displayedColumns: string[] = ['comment', 'nick'];
  dataSource;
  public URLValue;

  constructor(
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.db.list('offers', ref => ref.orderByChild('url').equalTo(this.URLValue)).valueChanges().subscribe(res => {
      console.log(res);
      this.dataSource = res;
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../models/models';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  isCardOpen = false;
  @Input() reservation: any;
  constructor() { }

  ngOnInit() {
  }

  openCard() {
    this.isCardOpen = !this.isCardOpen;
  }

}

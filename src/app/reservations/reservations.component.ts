import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { ReservationObject, Reservation } from '../models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservationList: Reservation[];

  _reservationListObservable: Observable<ReservationObject>;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this._reservationListObservable = this.reservationService.getListReservation();
  }

}

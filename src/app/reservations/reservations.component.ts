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

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getListReservation().subscribe(
      (data: ReservationObject ) => {
        this.reservationList = data.message;
      }
    )
  }

}

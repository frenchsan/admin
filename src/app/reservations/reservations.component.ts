import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { ReservationObject, Reservation } from '../models/models';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

reservationList: Reservation[];
panelOpenState = false;
test;
liste = [];
today = new Date();



  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getListReservation().subscribe(
      (data: ReservationObject ) => {
        this.reservationList = data.message;
      }
    );
  }

ObjectToArray(test) {
    const arr = [];
    Object.keys(test).map(function(key) {
    arr.push({[key]: test[key]});
    }
    );
    }

  addproperties() {
    this.reservationList.forEach(function(itm) {
      const tempo: string  = itm.hour_start.toString();
      itm.playdate = tempo.substring(0, 10);

     });
  }
     groupBy(list, props) {
      return list.reduce((a, b) => {
         (a[b[props]] = a[b[props]] || []).push(b);
         console.log(b);
         return a;
      }, {});
    }

}

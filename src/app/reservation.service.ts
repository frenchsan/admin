import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ReservationObject, Reservation } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getListReservation() {
    const body = {
      'startDateTime': '2019-03-21 16:34:55',
      'endDateTime': '2020-03-20 16:34:55',
      'unvalidated': true};

    return this.http.post<ReservationObject>(this.baseUrl + '/api/staff/sessions', body);
  }

  getAvailabilityList() {
    const body = {
      'startDateTime': '2019-03-21 16:34:55',
      'endDateTime': '2020-03-20 16:34:55',
       };

    this.http.post(this.baseUrl + '/api/staff/availability/list', body).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  availabilityCreate() {
    const body = {
      'room_id': 1,
      'startDateTime': '2019-04-23 08:00:00',
      'endDateTime': '2019-04-23 22:00:00',
      'gameTotalDuration': 60
       };

    this.http.post(this.baseUrl + '/api/staff/availability/create', body).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  sessionCreate() {
    const body = {
      'idAvailability' : 84,
      'startDateTime': '2019-04-23 12:00:00',
      'numberOfPlayers': 6,
      'level': 1,
      'subscribers': [{
        'firstname': 'daniel',
        'lastname': 'coucou',
        'creator': true,
        'email': 'daniel@bureau401.fr'
      }],
      'discounts': []
       };

    this.http.post(this.baseUrl + '/api/session/create', body).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  sessionConsult(id: number) {
    const body = {
      'session_id': id
      };

    this.http.post(this.baseUrl + '/api/session/consult', body).subscribe(
      (data) => {
        console.log(data);
      }
    );

  }

  sessionDelete(id: number) {
    const body = {
      'session_id': id
      };

    this.http.post(this.baseUrl + '/api/session/cancel', body).subscribe(
      (data) => {
        console.log(data);
      }
    );

  }

  sessionUpdate(id: number) {
    const body = {
      'idSession' : id,
      'startDateTime': '2019-04-23 12:00:00',
      'numberOfPlayers': 5,
      'level': 1,
      'subscribers': [{
        'firstname': 'daniel',
        'lastname': 'coucou',
        'creator': true,
        'email': 'daniel@bureau401.fr'
      }],
      'discounts': []
       };

    this.http.post(this.baseUrl + '/api/session/update', body).subscribe(
      (data) => {
        console.log(data);


      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = environment.baseUrl;
  private reservationsList: any;

  constructor(private http: HttpClient) { }

  getListReservation() {
    this.http.get(this.baseUrl + '/api/room/list').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}

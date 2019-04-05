import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-availability-create',
  templateUrl: './availability-create.component.html',
  styleUrls: ['./availability-create.component.css']
})
export class AvailabilityCreateComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  availabilityCreate() {
    this.reservationService.availabilityCreate();
  }

}

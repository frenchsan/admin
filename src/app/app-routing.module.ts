import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LoginComponent } from './login/login.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ReservationCreationComponent } from './reservation-creation/reservation-creation.component';
import { AvailabilityCreateComponent} from './availability-create/availability-create.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sessionconsult', component: ReservationsComponent},
  {path: 'sessioncreation', component: ReservationCreationComponent},
  {path: 'availabilitycreation', component: AvailabilityCreateComponent},
  {path: 'roomList', component: RoomListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

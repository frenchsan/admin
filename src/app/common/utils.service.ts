import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  today = new Date();
  date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();

  constructor() { }

}

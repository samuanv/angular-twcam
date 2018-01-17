import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from '../../../shared/interfaces/flight';
import { FlightsService } from './flights.services';

import { AlertService } from '../../../shared/services/alert.service';
@Component({
  selector: 'flights',
  templateUrl: './flights.html',
  styleUrls: ['./flights.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Flights implements OnInit {


  public editing = {};
  public flights: Flight[];
  public tempFlights: Flight[];
  public value = new Date();
  constructor(private service: FlightsService, private alert: AlertService) { }

  ngOnInit() {
    this.service.getFlights().subscribe(data => {
      this.flights = data;
      this.tempFlights = [...data];
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempFlights.filter(function (d) {
      return d.nombre.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.flights = temp;
    // Whenever the filter changes, always go back to the first page

  }
  public updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.flights[rowIndex][cell] = event.target.value;
    /*if (cell === 'fechaLlegada' || cell === 'horaLlegada' || cell === 'fechaSalida' || cell === 'horaSalida') {
      var route = 'retraso/';
    } else if (cell === 'estado') {
      var route = 'estado/'
    } else {
      var route = '';
    }*/
    const route = '';
    this.service.putFlight(this.flights[rowIndex], route).subscribe(data => {
      console.log(data);
      this.alert.addAlert('Congrats', 'The flight has been updated successfully', 'success');
      this.ngOnInit();
    }, err => {
      if (cell === 'fechaLlegada' || cell === 'fechaSalida') {
        this.alert.addAlert('Be careful', 'dates should have dd-mm-yyyy format, try again', 'warning');
      } else if (cell === 'horaLlegada' || cell === 'horaSalida') {
        this.alert.addAlert('Be careful', 'times should have HH:mm format, try again', 'warning');
      } else {
        this.alert.addAlert('Error', 'Something happens with server', 'danger');
      }
      this.ngOnInit();

    });

  }

}

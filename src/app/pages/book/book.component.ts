import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookService } from './book.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { FlightsService } from '../flights/flights.services';
import { Flight } from '../../../shared/interfaces/flight';
import { Book as Bi } from '../../../shared/interfaces/book';

import { AlertService } from '../../../shared/services/alert.service';
import { UserService } from '../../../shared/services/user.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'book',
  templateUrl: './book.html',
  styleUrls: ['./book.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Book implements OnInit {
  public flights: Flight[];
  public flight: Flight;
  public images = {
    'Valencia': 'https://static.pexels.com/photos/416011/pexels-photo-416011.jpeg',
    'Madrid': 'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
    'Barcelona': 'https://static.pexels.com/photos/705424/pexels-photo-705424.jpeg',
    'Bilbao': 'http://oi43.tinypic.com/a0uv0g.jpg',
    'Alicante': 'https://static.pexels.com/photos/434614/pexels-photo-434614.jpeg',
    'Murcia': 'http://oi48.tinypic.com/bekb8.jpg',
    'Sevilla': 'http://oi46.tinypic.com/63zvqf.jpg',
    'Vigo': 'http://oi40.tinypic.com/2yno77d.jpg',
    'Tarragona': 'http://oi47.tinypic.com/9pqmb6.jpg',
    'Castellón': 'http://oi46.tinypic.com/a2gbk5.jpg'
  };
  public showVip = [];
  public form: FormGroup;
  public modalReference: any;
  constructor(private fb: FormBuilder,
    private flightsService: FlightsService,
    private bookService: BookService,
    private alert: AlertService,
    private modalService: NgbModal,
    private userService: UserService) {
    this.form = fb.group({
      'email': [{ value: userService.getEmail(), disabled: true }
        , Validators.compose([Validators.required, Validators.minLength(4), Validators.email])],
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'dni': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'fechaNac': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'price': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.flightsService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }
  public open(content, flight) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.form.reset(this.form.value);
      this.flight = new Flight;
      this.form.get('email').setValue(this.userService.getEmail());
    }, (reason) => {
      this.form.reset(this.form.value);
      this.flight = new Flight;
      this.form.get('email').setValue(this.userService.getEmail());
    });
    this.flight = flight;
  }

  public onSubmit() {
    if (confirm('¿Are you sure?')) {
      const obj = {
        id: null,
        precio: this.form.get('price').value,
        vuelo: this.flight,
        pasajero: {
          'email': this.form.get('email').value,
          'nombre': this.form.get('nombre').value,
          'dni': this.form.get('dni').value,
          'fechaNac': this.form.get('fechaNac').value
        }
      };
      this.bookService.postBook(obj).subscribe(data => this.putAlert('Congratulations', 'You have buy the flight succesfully', 'success'));
      this.modalReference.close();
    }

  }
  public putAlert(title, body, type): void {
    this.alert.addAlert(title, body, type);
  }

}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../../shared/interfaces/flight';
import { UtilsService } from '../../../shared/services/utils.service';

@Injectable()

export class FlightsService {
    private path = 'vuelo';
    constructor(private http: HttpClient, private utils: UtilsService) { }

    getFlights(): Observable<Flight[]> {
        return this.http.get<Flight[]>(`${this.utils.get_url(this.path)}`, this.utils.jwt());
    }
    postFlight(flight: Flight): Observable<Flight> {
        return this.http.post<Flight>(`${this.utils.get_url(this.path)}` , flight , this.utils.jwt());
    }
    putFlight(flight: Flight, route: string): Observable<Flight> {
        return this.http.put<Flight>(`${this.utils.get_url(this.path)}/${route}${flight.id}`, flight , this.utils.jwt());
    }
}

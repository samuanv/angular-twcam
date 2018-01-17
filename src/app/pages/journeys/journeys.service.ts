import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Journey } from '../../../shared/interfaces/journey';
import { UtilsService } from '../../../shared/services/utils.service';

@Injectable()

export class JourneysService {
    private path = 'trayecto';
    constructor(private http: HttpClient, private utils: UtilsService) { }

    getJourneys(): Observable<any[]> {
        return this.http.get<any[]>(`${this.utils.get_url(this.path)}`, this.utils.jwt());
    }
    postJourney(journey: Journey): Observable<Journey> {
        return this.http.post<Journey>(`${this.utils.get_url(this.path)}` , journey , this.utils.jwt());
    }
    putJourney(journey: Journey): Observable<Journey> {
        return this.http.put<Journey>(`${this.utils.get_url(this.path)}/${journey.id}`, journey , this.utils.jwt());
    }
}

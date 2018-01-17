import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UtilsService } from '../../../shared/services/utils.service';
import { Book } from '../../../shared/interfaces/book';

@Injectable()

export class MyTravelsService {
    private path = 'billete';
    constructor(private http: HttpClient, private utils: UtilsService) { }
    getTravels(email): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.utils.get_url(this.path)}?q=${email}`, this.utils.jwt());
    }
}

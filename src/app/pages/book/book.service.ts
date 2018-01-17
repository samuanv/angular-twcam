import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UtilsService } from '../../../shared/services/utils.service';
import { Book } from '../../../shared/interfaces/book';

@Injectable()

export class BookService {
    private path = 'billete';
    constructor(private http: HttpClient, private utils: UtilsService) { }
    postBook(book: Book): Observable<Book> {
        return this.http.post<Book>(`${this.utils.get_url(this.path)}` , book , this.utils.jwt());
    }
}

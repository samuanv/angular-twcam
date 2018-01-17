import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()

export class UtilsService {

    constructor() { }


    jwt() {
        // create authorization header with jwt
        const token = localStorage.getItem('auth_token');

        const headersauth = new HttpHeaders().set('Authorization', 'Bearer ' + token);

        return {headers: headersauth};
    }

    get_url(path) {
        return `${environment.base_url}/${path}`;
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', JSON.parse(error._body)); // for demo purposes only
        return Promise.reject(JSON.parse(error._body).errors);
    }
}

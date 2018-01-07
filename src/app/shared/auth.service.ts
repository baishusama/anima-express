import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    isLoggedIn = false;

    redirectUrl: string;

    constructor() {
    }

    login(): Observable<boolean> {
        // return
    }

    logout() {
    }
}

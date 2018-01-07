import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/delay'; // TODO: why such import style ?

import { Animation } from './animation.model';

// TODO: `put` needs http options ? & where to class related const variables ?
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AnimationService {
    // delayMs: 1000;
    private animationsUrl = 'api/animations';

    constructor(private http: HttpClient) {
    }

    addAnimation(animation: Animation): Observable<Animation> {
        return this.http.post<Animation>(this.animationsUrl, animation, httpOptions);
    }

    deleteAnimation(animation: Animation | number): Observable<Animation> {
        const id = typeof animation === 'number' ? animation : animation.id;
        const url = `${this.animationsUrl}/${id}`;
        return this.http.delete<Animation>(url, httpOptions);
    }

    updateAnimation(animation: Animation): Observable<any> {

        // TODO: put || patch ???
        return this.http.put(this.animationsUrl, animation, httpOptions);
    }

    getAnimation(id: number): Observable<Animation> {
        const url = `${this.animationsUrl}/${id}`;
        return this.http.get<Animation>(url);
    }

    getAnimations(): Observable<Animation[]> {
        return this.http.get<Animation[]>(this.animationsUrl);
    }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentResolve {
    resolve: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ResolveGuardService implements Resolve<CanComponentResolve> {
    resolve(component: CanComponentResolve) {
        return component.resolve ? component.resolve() : true;
    }

    /*constructor() {}*/
}

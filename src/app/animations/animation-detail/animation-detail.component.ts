import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-animation-detail',
    templateUrl: './animation-detail.component.html',
    styleUrls: ['./animation-detail.component.css']
})
export class AnimationDetailComponent implements OnInit {
    // animation$: Observable<Animation>;
    animationID: Number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        /*this.animation$ = this.route.paramMap
         .switchMap((params: ParamMap) =>
         this.service.get)*/
        // console.log(`ActivateRoute : ${this.route}`);
        console.log('ActivateRoute : ', this.route);
        // console.log(`ActivateRoute : {this.route}`);
        // this.animationID = this.route.paramMap.get('id');
    }

}

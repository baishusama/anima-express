import { Component, OnInit } from '@angular/core';

import {AnimationService} from '../shared/animation.service';

@Component({
    selector: 'app-animation-list',
    templateUrl: './animation-list.component.html',
    styleUrls: ['./animation-list.component.css']
})
export class AnimationListComponent implements OnInit {

    constructor(
        private animationService: AnimationService
    ) {
    }

    ngOnInit() {
        this.animationService.getAnimations().subscribe();
    }

}

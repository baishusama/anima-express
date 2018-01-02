import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsComponent } from './animations.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { AnimationDetailComponent } from './animation-detail/animation-detail.component';

import { AnimationsRoutingModule } from './animations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ],
  declarations: [AnimationsComponent, AnimationListComponent, AnimationDetailComponent]
})
export class AnimationsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimationListComponent } from './animation-list/animation-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimationsComponent, AnimationComponent, AnimationListComponent]
})
export class AnimationsModule { }

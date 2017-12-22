import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationsComponent } from './animations.component'
import { AnimationComponent } from './animation/animation.component'
import { AnimationListComponent } from './animation-list/animation-list.component'

const routes: Routes = [
  {
    path: 'list',
    component: AnimationListComponent
  },
  {
    path: 'anime/:id',
    component: AnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule {

}

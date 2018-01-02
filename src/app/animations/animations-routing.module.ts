import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AnimationsComponent } from './animations.component'
import { AnimationDetailComponent } from './animation-detail/animation-detail.component'
import { AnimationListComponent } from './animation-list/animation-list.component'

const animationRoutes: Routes = [
  {
    path: 'animes',
    component: AnimationListComponent
  },
  {
    path: 'anime/:id',
    component: AnimationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(animationRoutes)], // TODO: how ?
  exports: [RouterModule]
})
export class AnimationsRoutingModule {

}

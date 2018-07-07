import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AnimationsComponent } from './animations.component'
import { AnimationDetailComponent } from './animation-detail/animation-detail.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { AnimationNewComponent } from './animation-new/animation-new.component';

const animationRoutes: Routes = [
    {
        path: 'animes',
        component: AnimationListComponent
    },
    {
        path: 'anime/new',
        component: AnimationNewComponent
    },
    /**
     * Note that /new should before /:id
     * , TODO: is there any other way ? like make :id must be number if possible ?
     */
    {
        path: 'anime/:id',
        component: AnimationDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(animationRoutes)], // TODO: how ?
    exports: [RouterModule]
})
export class AnimationsRoutingModule {}

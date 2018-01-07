import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <- Child module using formGroup directive needs this !
// For reason see more on https://github.com/angular/angular/issues/14288#issuecomment-282645057

import { AnimationService } from './shared/animation.service';

import { AnimationsComponent } from './animations.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { AnimationDetailComponent } from './animation-detail/animation-detail.component';
import { AnimationNewComponent } from './animation-new/animation-new.component';

import { AnimationsRoutingModule } from './animations-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule, // <- Child module using formGroup directive needs this !
        AnimationsRoutingModule
    ],
    declarations: [
        AnimationsComponent,
        AnimationListComponent,
        AnimationDetailComponent,
        AnimationNewComponent
    ],
    providers: [
        AnimationService
    ]
})
export class AnimationsModule {
}

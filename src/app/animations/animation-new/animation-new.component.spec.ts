import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationNewComponent } from './animation-new.component';

describe('AnimationNewComponent', () => {
    let component: AnimationNewComponent;
    let fixture: ComponentFixture<AnimationNewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnimationNewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnimationNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

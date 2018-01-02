import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDetailComponent } from './animation-detail.component';

describe('AnimationDetailComponent', () => {
  let component: AnimationDetailComponent;
  let fixture: ComponentFixture<AnimationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

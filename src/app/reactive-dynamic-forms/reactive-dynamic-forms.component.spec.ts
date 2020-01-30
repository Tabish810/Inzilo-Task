import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDynamicFormsComponent } from './reactive-dynamic-forms.component';

describe('ReactiveDynamicFormsComponent', () => {
  let component: ReactiveDynamicFormsComponent;
  let fixture: ComponentFixture<ReactiveDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

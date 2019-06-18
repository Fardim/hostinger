import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeileDetailsComponent } from './teile-details.component';

describe('TeileDetailsComponent', () => {
  let component: TeileDetailsComponent;
  let fixture: ComponentFixture<TeileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

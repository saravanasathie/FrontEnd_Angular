import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleComponentComponent } from './style-component.component';

describe('StyleComponentComponent', () => {
  let component: StyleComponentComponent;
  let fixture: ComponentFixture<StyleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

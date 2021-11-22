import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPlanComponent } from './footer-plan.component';

describe('FooterPlanComponent', () => {
  let component: FooterPlanComponent;
  let fixture: ComponentFixture<FooterPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

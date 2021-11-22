import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizeSectionComponent } from './cotize-section.component';

describe('CotizeSectionComponent', () => {
  let component: CotizeSectionComponent;
  let fixture: ComponentFixture<CotizeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

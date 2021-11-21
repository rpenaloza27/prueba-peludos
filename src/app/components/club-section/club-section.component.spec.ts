import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSectionComponent } from './club-section.component';

describe('ClubSectionComponent', () => {
  let component: ClubSectionComponent;
  let fixture: ComponentFixture<ClubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

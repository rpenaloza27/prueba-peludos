import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plans-section',
  templateUrl: './plans-section.component.html',
  styleUrls: ['./plans-section.component.scss']
})
export class PlansSectionComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faStar = faStar;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}

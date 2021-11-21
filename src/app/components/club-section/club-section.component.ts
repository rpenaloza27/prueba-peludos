import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-club-section',
  templateUrl: './club-section.component.html',
  styleUrls: ['./club-section.component.scss']
})
export class ClubSectionComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faStar = faStar;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}

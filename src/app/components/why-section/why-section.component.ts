import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why-section',
  templateUrl: './why-section.component.html',
  styleUrls: ['./why-section.component.scss']
})
export class WhySectionComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faStar = faStar;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faChevronDown, faChevronUp, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BannerHomeComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faStar = faStar;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}

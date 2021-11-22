import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faStar = faStar;
  faCheck = faCheck;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

}

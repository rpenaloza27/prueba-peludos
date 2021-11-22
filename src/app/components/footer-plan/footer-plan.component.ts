import { Component, OnInit } from '@angular/core';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-footer-plan',
  templateUrl: './footer-plan.component.html',
  styleUrls: ['./footer-plan.component.scss']
})
export class FooterPlanComponent implements OnInit {

  constructor(public planner:PlannerService) { }

  ngOnInit(): void {
  }

}

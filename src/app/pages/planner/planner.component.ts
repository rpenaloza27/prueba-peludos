import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, public planner :PlannerService) { 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.planner.plan){
      if(!this.planner.plan?.planName){
        this.planner.plan.planName="estandar";
        this.planner.plan.planPrice=28000;

        this.planner.saveDataPlan(this.planner.plan);
      }
    }
    
  }

  setPlan(planName:string, price:number){
    if(this.planner.plan){
      this.planner.plan.planName=planName;
      this.planner.plan.planPrice=price;
    }
  }

}

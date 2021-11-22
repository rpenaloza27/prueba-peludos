import { Injectable } from '@angular/core';
import { Plan } from '../interfaces/Plan';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  plan:Plan|null=null
  constructor() {
    this.setDataPlan()
  }

  setDataPlan(){
    if(localStorage.getItem("planner")){
      const plan= localStorage.getItem("planner");
      this.plan=JSON.parse(plan||"");
      console.log("plan", this.plan)
    }
  }

  saveDataPlan(plan:Plan){
    this.plan=plan;
    localStorage.setItem("planner", JSON.stringify(this.plan));
  }
}

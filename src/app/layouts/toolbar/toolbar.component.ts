import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isHome:boolean=true
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.url
    
    this.router.url.subscribe(res=>{
      console.log("IsHome", res)
    })
  }

}

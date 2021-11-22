import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isHome:boolean=true
  
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.url
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
         route = route.firstChild;
        }
        return route;
       }),
       map(route => route.url)
      )
     .subscribe(res=>{
       console.log("Url", res)
       res.subscribe(d=>{
         console.log("Url result", d[0].path)
         this.isHome= d[0].path=='home'
       })
     })
  }

  scrollTo(elementClass:string){
    const element = document.getElementsByClassName(elementClass);
    if(element.length>0 && element.item(0)!=null){
      element.item(0)?.scrollIntoView({behavior: 'smooth'});
    }
  }

}

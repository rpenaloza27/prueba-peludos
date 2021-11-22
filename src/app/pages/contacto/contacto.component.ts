import { Component, OnInit } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  faPaw= faPaw
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cotize-section',
  templateUrl: './cotize-section.component.html',
  styleUrls: ['./cotize-section.component.scss']
})
export class CotizeSectionComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  frmCotize: FormGroup;
  genre: string = "perro"
  typePet: string = ""
  filteredOptions: Observable<string[]> = new Observable();
  razas: any[] = [
    { id: "1", text: "Criollo" },
    { id: "2", text: "Affenpinscher" },
    { id: "3", text: "Afgano" },
    { id: "4", text: "Airedale" },
    { id: "5", text: "Akita" }
  ]
  constructor(private fb: FormBuilder,
    private router: Router) {
    this.frmCotize = this.fb.group({
      name_pet: ['', Validators.required],
      type: ['perro', Validators.required],
      genre: ['hembra', Validators.required],
      age: ['', Validators.required],
      months: ['',],
      raza: ['',],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: ['', Validators.requiredTrue],
    })
    this.frmCotize.valueChanges.subscribe(res => {
      console.log("Value Object", res)
    })
  }

  ngOnInit(): void {
  }

  get controls() {
    return this.frmCotize.controls;
  }


  selectType(type: string) {
    console.log("Click", type)
    this.typePet = type;
    this.frmCotize.patchValue({
      type
    })
  }

  selectGenre(genre: string) {
    console.log("Click", genre)
    this.genre = genre;
    this.frmCotize.patchValue({
      genre
    })
  }

  submit() {
    console.log("Value", this.frmCotize.value)
    const planner = this.frmCotize.value;
    localStorage.setItem("planner", JSON.stringify(planner));
    this.router.navigate(['planner']);
  }

  isInvalid(control: any) {
    return control.dirty && control.touched && control.errors;
  }

}

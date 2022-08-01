import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
name: string = "Adilson";
age: number = 20;
job: string = "System Analyst";
hobbies = ['Correr', 'Dormir', 'Jogar'];
car = {
  name:"Toyota",
  year: 2021
};

  constructor() { }

  ngOnInit(): void {
  }

}

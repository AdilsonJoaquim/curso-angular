import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
canShow: boolean = true;
@Input() name: string = 'Adriano'; //Modo de compartilhar dados com o html
@Input() idade: number = 11;
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  @Input() titulo: string;
  constructor() { }

  ngOnInit(): void {
  }
  ocultar(){
    document.getElementById("caja").style.opacity = "0";
  }

  mostrar() {
    document.getElementById("caja").style.opacity = "1";
  }
}

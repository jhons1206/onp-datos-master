import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-facil',
  templateUrl: './facil.component.html',
  styleUrls: ['./facil.component.css']
})
export class FacilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("#carrusel1").style="display: none;";
  }

}
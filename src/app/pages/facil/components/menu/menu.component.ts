import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Unete:string='';
  Beneficios:string='';
  Asegura:string='';
  Afp:string='';
  Facil:string='';
  Financiamiento:string='';
  @Input('active') menuActive:string='';
  constructor() { }

  ngOnInit(): void {
    if(this.menuActive=="Unete"){
      this.Unete="background-color:var(--second-color);color: var(--white-color);";
    }
    if(this.menuActive=="Beneficios"){
      this.Beneficios="background-color:var(--second-color);color: var(--white-color);";
    }
    if(this.menuActive=="Asegura"){
      this.Asegura="background-color:var(--second-color);color: var(--white-color);";
    }
    if(this.menuActive=="Afp"){
      this.Afp="background-color:var(--second-color);color: var(--white-color);";
    }
    if(this.menuActive=="Financiamiento"){
      this.Financiamiento="background-color:var(--second-color);color: var(--white-color);";
    }

  }

}

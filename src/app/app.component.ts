import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
declare function gtag(obs:any,obs2:any,obs3:any):any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Página en construcción';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-189961576-1',{'page_path': event.urlAfterRedirects});
        console.log(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    this.router.navigate(['/Inicio']);
  }

}

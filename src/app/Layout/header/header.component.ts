import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false
  constructor(private store: StorageService, private router: Router) {
    let token = window.sessionStorage.getItem('token')
    if (token !== null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false
    }
  }
  ngOnInit(): void {
  }
  onclicklogout(){
    this.store.removeToke()
    this.router.navigate(['/signin'])

  }

}

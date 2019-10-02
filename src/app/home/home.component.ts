import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //importing the DataService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  //h1Style: boolean = false;
  // creating an instance of it through dependency injection 
  // within the constructor() function.
  constructor(private data: DataService) { }

  // Any code inside ngOnInit will run when the component is loaded.
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    })
  }

  firstClick(){
    console.log('clicked');
    //this.h1Style = true;
    this.data.firstClick();
  }

  


}

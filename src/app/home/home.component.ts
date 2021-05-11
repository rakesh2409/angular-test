import { Component, OnInit } from '@angular/core';
import { NavItems } from './navigation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string = '';
  public navItems: Array<NavItems> = [
    {
      label: 'New product',
      link: '/home/new-product'
    },
    {
      label: 'Sales',
      link: '/home/sales'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

}

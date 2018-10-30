import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.sidenav').sidenav();
    });
  }

}

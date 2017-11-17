import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() countryName: string = "";

}

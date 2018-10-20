import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent implements OnInit {

  @Input() launch: Object;

  constructor() { }

  ngOnInit() {
  }

}

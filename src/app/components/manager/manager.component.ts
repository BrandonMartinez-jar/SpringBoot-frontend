import { Component, OnInit, Input } from '@angular/core';
import { Manager } from 'src/app/interfaces/manager';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  @Input() manager!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

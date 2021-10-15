import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/interfaces/manager';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public managers: string[] = []

  constructor(private managerService : ManagerService) { }
  
  ngOnInit(): void {
    this.getManagers();
  }

  public getManagers() {
    this.managerService.getManagers().subscribe(
      (res : Manager[]) =>{
        res.forEach(e => {
          let aux = e.firstName + " " + e.secondName + " " + e.firstLastName + " " + e.secondLastName
          if(!this.managers.includes(aux)){
            this.managers[this.managers.length] = aux;
          }
          
        })
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    this.managers = [... new Set(this.managers)]
  }
}

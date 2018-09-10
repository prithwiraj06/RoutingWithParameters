import {Component,OnInit} from '@angular/core';
import { IEmployee } from '../EmployeeInterface/employee.interface';
import { EmployeeService } from '../EmployeeService/employee.service';

@Component({
    selector:'employeeList',
    templateUrl:'./employeeList.component.html'
})
export class EmployeeListComponent implements OnInit
{
    employee:IEmployee[];
   
    statusMessage:string="Loading Employee Data";
    constructor(private  _employeeService:EmployeeService){}

    ngOnInit()
    {
        this._employeeService.getEmployee().subscribe((employeeData)=>this.employee=employeeData,error=>{
            console.log(error);
            this.statusMessage="Server is down please try again";
        });
        
    }
}
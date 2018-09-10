import {Component,OnInit} from '@angular/core'
import {IEmployee} from '../EmployeeInterface/employee.interface';
import { EmployeeService } from '../EmployeeService/employee.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector:'employee',
    templateUrl:'./employee.component.html'
})
export class EmployeeComponent implements OnInit
{
    employee:IEmployee;
    statusMessage:string='Loading data please wait...';
    constructor(private _employeeService:EmployeeService,private _activatedRoute:ActivatedRoute)
    {

    }
    ngOnInit()
    {
        let empId:string=this._activatedRoute.snapshot.params['Id'];
        this._employeeService.getEmployeeById(empId).subscribe((employeeData)=>this.employee=employeeData,error=>{
            console.log(error);
            this.statusMessage='server is down please try again...';

        })
    }



}
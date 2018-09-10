import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import {IEmployee} from '../EmployeeInterface/employee.interface'
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class EmployeeService
{
    constructor(private _http:Http){}
    employee:IEmployee[];
    getEmployee():Observable<IEmployee[]>
    {
        return this._http.get('http://localhost:44750/api/employee').map((response:Response)=><IEmployee[]>response.json()).catch(this.handleError);

    }
    handleError(error:Response)
    {
        console.log(error);
        return Observable.throw(error);
    }
    getEmployeeById(employeeId:string):Observable<IEmployee>
    {
        return this._http.get('http://localhost:44750/api/employee/'+employeeId).map((response:Response)=><IEmployee>response.json()).catch(this.error)
    }
    error(error:Response)
    {
        console.log(error);
        return Observable.throw(error);
    }
   
}
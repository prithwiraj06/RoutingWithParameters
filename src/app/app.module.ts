import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employeeList.component';
import {HomeComponent} from './Home/home.component';
import {HttpModule} from '@angular/http'
import {RouterModule,Routes} from '@angular/router';
import { EmployeeService } from './EmployeeService/employee.service';
import { NotFoundComponent } from './NotFound/notfound.component';
import { EmployeeComponent } from './Employee/employee.component';
const appRoute:Routes=[
  {path:'Home', component:HomeComponent},
  {path:'employee', component:EmployeeListComponent},
  {path:'employees/:Id',component:EmployeeComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}


]
@NgModule({
  declarations: [
    AppComponent,HomeComponent,EmployeeListComponent,NotFoundComponent,EmployeeComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

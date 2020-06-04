import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { EmployeeComponent } from './employees/employee/employee.component';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { environment } from '../environments/environment';
import { EmployeeService } from './shared/employee.service';
import { DepartmentService } from './shared/department.service';
import { EmployeeListComponent } from './employees/employee/employee-list/employee-list.component';

@NgModule({
   declarations: [
      AppComponent,
      EmployeesComponent,
      EmployeeComponent,
      EmployeeListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      ReactiveFormsModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      FormsModule
   ],
   providers: [EmployeeService, DepartmentService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

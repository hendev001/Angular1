import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
              public departmentService: DepartmentService,
              public notificationService: NotificationService) { }
  // departments = [
  //   { id: 3, value: 'Dep 1' },
  //   { id: 2, value: 'Dep 2' },
  //   { id: 3, value: 'Dep 3' }];

  ngOnInit() {

    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }


  // submitting the form to the
  onSubmit() {
     if (this.service.form.valid) {
       this.service.insertEmployee(this.service.form.value);
       this.service.form.reset();
       this.service.initializeFormGroup();
       this.notificationService.success(':) Submitted Successfully');

     }
  }
}

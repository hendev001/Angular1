import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../shared/employee.service';
import { MatTableDataSource,  MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(public service: EmployeeService) {}

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName'];

  ngOnInit() {
    this.service.getEmployees().subscribe(list => {
      const array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.listData = new MatTableDataSource(array);
    });
  }
}

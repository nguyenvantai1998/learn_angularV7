import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list1',
  template: `
    <h2>Emploee List</h2>
    <ul *ngFor="let employee of employees">
        <li>{{ employee.name }}</li>
    </ul>
  `,
  styleUrls: ['./employee-list1.component.css']
})
export class EmployeeList1Component implements OnInit {

  // Khởi tạo 1 mãng rỗng lấy giá trị từ employee.service.ts
  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this.employees = this._employeeService.getEmployees();
  }
}

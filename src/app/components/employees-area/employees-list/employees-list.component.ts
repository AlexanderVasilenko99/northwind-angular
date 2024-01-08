import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import EmployeeModel from '../../../models/employee-model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {


  public employees: EmployeeModel[] = [];

  constructor(private employeeService: EmployeesService) { }
  public async ngOnInit(): Promise<void> {
    this.employees = await this.employeeService.getAllEmployees();
  }


}

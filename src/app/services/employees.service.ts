import { Injectable } from '@angular/core';
import EmployeeModel from '../models/employee-model';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  public async getAllEmployees(): Promise<EmployeeModel[]> {
    const observable = this.httpClient.get<EmployeeModel[]>(appConfig.employeesUrl);
    const employees = await firstValueFrom(observable);
    return employees;
  }
}

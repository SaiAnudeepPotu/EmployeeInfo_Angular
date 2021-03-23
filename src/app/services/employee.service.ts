import { Employee } from './../models/Employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL: string = 'https://localhost:5001/employee';
  formData: Employee = new Employee();
  list: Employee[] = [];
  constructor(public http: HttpClient) {}

  postEmployeeDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEmployeeDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deleteEmployeeDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Employee[]);
  }


}

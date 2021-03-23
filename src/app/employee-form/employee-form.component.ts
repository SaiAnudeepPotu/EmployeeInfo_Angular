import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/Employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {


  constructor(public service: EmployeeService) { }
  
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmployeeDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        alert('Submitted successfully');
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putEmployeeDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        alert('Updated successfully');
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Employee();
  }

}

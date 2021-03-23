import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public service: EmployeeService) { }
  
  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Employee) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployeeDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            alert("Deleted successfully");
          },
          err => { console.log(err) }
        )
    }
  }

}

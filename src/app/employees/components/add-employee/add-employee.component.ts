import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpoyeesService } from '../../services/empoyees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  addEmployeeForm = new FormGroup({
    name: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required,Validators.minLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email])
  });

  constructor(private employeeService: EmpoyeesService) { }

  ngOnInit(): void {
  }

  handleAddEmployeeSubmit(): void{

    console.log(this.addEmployeeForm.value);
    this.employeeService.createEmployee(this.addEmployeeForm.value)
    .subscribe((res: any) => {
       if(res && res.id){
         this.isSaved = true;
       }
    });
  }

}

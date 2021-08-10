import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpoyeesService {

  constructor( private http: HttpClient ) { }

  createEmployee(employeeFormData: any): any{
    return this.http.post('https://jsonplaceholder.typicode.com/users', employeeFormData)
    .pipe(map( (res: any) => { // 3. get the res from the REST API
      console.log(res);
      return res; // 4. send the res to the comp.ts
    }));
  }
}

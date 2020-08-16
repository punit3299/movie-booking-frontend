import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  searchText:string;
  customers:any
  constructor(private service:AdminService) { 
    this.service.getAllCustomers().subscribe(data=>
      {
        this.customers=data
        console.log(data)
      })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/models/show.model';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-view-shows',
  templateUrl: './view-shows.component.html',
  styleUrls: ['./view-shows.component.css']
})
export class ViewShowsComponent implements OnInit {
  public shows:Show[];
  constructor(private customerService:CustomerService) {
    this.customerService.getAllShows().subscribe(data=>{this.shows=data,console.log(this.shows)},error=>{alert(error)});
   }

  ngOnInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != '') {
      this.shows = this.shows.filter(show => show.movieName.toLowerCase().startsWith(filterValue.toLowerCase()) || show.theatreName.toLowerCase().startsWith(filterValue.toLowerCase()));
    }
    else {
      
      this.customerService.getAllShows().subscribe(data=>{this.shows=data,console.log(this.shows)},error=>{alert("No shows available");this.shows=[];});
  }

}

}

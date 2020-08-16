import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  todayRevenue;
  todayBookingCount;
  customersCount;
  theatresCount;
  topThreeTheatres;
  topThreeMovies;
  recentThreeBookings;

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.adminService.getTodayRevenue().subscribe(data => {
      this.todayRevenue = data;
    })

    this.adminService.getTodayBookingCount().subscribe(data => {
      this.todayBookingCount = data;
    })

    this.adminService.getCountOfCustomers().subscribe(data => {
      this.customersCount = data;
    })

    this.adminService.getCountOfTheatres().subscribe(data => {
      this.theatresCount = data;
    })

    this.adminService.getTopThreeTheatres().subscribe(data=>{
      this.topThreeTheatres=data;
    })

    this.adminService.getTopThreeMovies().subscribe(data=>{
      this.topThreeMovies=data;
    })

    this.adminService.getRecentThreeBookings().subscribe(data=>{
      this.recentThreeBookings=data;
      console.log(data);
    })
  }

}

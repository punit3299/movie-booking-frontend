import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Chart } from 'chart.js';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css']
})
export class AdminStatsComponent implements OnInit {

  chart = [];

  date = [];
  genres = [];
  genrewiseMoviesCount = [];
  genrewiseMoviesCountList;
  genderwiseCount;

  constructor(private adminService: AdminService) {
    this.date.push("16/05/20");
    this.date.push("17/05/20");
    this.date.push("18/05/20");
    this.date.push("19/05/20");
    this.date.push("20/05/20");
    this.date.push("21/05/20");
    this.date.push("22/05/20");
  }

  ngOnInit() {

    //revenue in last 7 days chart

    this.adminService.getRecentRevenues().subscribe(data => {
      console.log(data);
      this.chart = new Chart('revenueChart', {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              label: 'Total Revenue (in INR) - Last 7 Days',
              backgroundColor: '#66bb6a',
              borderColor: '#66bb6a',
              data: [2000, 1000, 1500, 4000, 3000, 4200, 5000],
              fill: false,
            }
          ]
        }
      })
    })

    //bookings in last 7 days chart

    this.adminService.getRecentBookingsCount().subscribe(data => {
      console.log(data);

      this.chart = new Chart('bookingsChart', {
        type: 'bar',
        data: {
          labels: this.date,
          datasets: [
            {
              label: 'No of Orders - Last 7 Days',
              backgroundColor: '#007bff',
              borderColor: 'green',
              data: [4, 2, 5, 7, 4, 6, 3],
              fill: false,
            }
          ]
        }
      })
    })

    //genre chart

    this.adminService.getGenrewiseMoviesCount().subscribe(data => {
      this.genrewiseMoviesCountList = data;
      this.genrewiseMoviesCountList.filter(m => this.genres.push(m.genre));
      this.genrewiseMoviesCountList.filter(m => this.genrewiseMoviesCount.push(m.count));
      console.log(this.genres)
      console.log(this.genrewiseMoviesCount)
    })

    this.chart = new Chart('genreChart', {
      type: 'pie',
      data: {
        labels: ['Action', 'Adventure', 'Comedy', 'Horror', 'Romance', 'Sci-fi', 'Animation'],
        datasets: [
          {
            label: 'Category Wise Orders',
            backgroundColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88', '#9A4F94', '#172037', '#336DFF'],
            borderColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88', '#9A4F94', '#172037 ', '#336DFF'],
            data: [5, 2, 6, 2, 4, 7, 8, 4],
            fill: true,
          }
        ]
      }
    })

    //gender chart

    this.adminService.getGenderwiseCount().subscribe(data => {
      this.genderwiseCount = data;
      this.chart = new Chart('genderChart', {
        type: 'doughnut',
        data: {
          labels: ['Male', 'Female', 'Others'],
          datasets: [
            {
              label: 'Gender wise Customer',
              backgroundColor: ['#FF8153', '#66bb6a', '#FFEA88'],
              borderColor: ['#FF8153', '#66bb6a', '#FFEA88'],
              data: [this.genderwiseCount.male, 1, this.genderwiseCount.others],
              fill: true,
            }
          ]
        }
      })

    })
  }
}

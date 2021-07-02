import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-cur-location',
  templateUrl: './cur-location.component.html',
  styleUrls: ['./cur-location.component.css']
})
export class CurLocationComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  constructor(private weatherService : WeatherServiceService) { }

  ngOnInit(): void {
    // this.getLocation();
  }

  // getLocation() {
  //   this.weatherService.getLocationService().then(resp => {
  //     this.latitude = resp.lat;
  //     this.longitude = resp.long;
  //     console.log(resp.long);
  //     console.log(resp.lat);
  //   })
  // }

}

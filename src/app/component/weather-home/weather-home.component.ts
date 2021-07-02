import { WeatherServiceService } from './../../services/weather-service.service';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/model/weather.model';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})

export class WeatherHomeComponent implements OnInit {
  location: any;
  myWeather: Weather[] = [];
  weatherData: any;
  geoLocation: any[] = [];
  currentData: any[]=[];
  forecastData: any[] = [];
  forecastDaily: any[] = [];
  selectedValue: any = "";
  cities: any[] = [];
  coOrdinates: any;
  selectedCity: any;
  constructor(private weatherservice : WeatherServiceService) { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('city')));
    console.log(typeof (JSON.parse(localStorage.getItem('city'))));
    this.cities = JSON.parse(localStorage.getItem('city'));
  }

  onsubmit() {
    if (!this.selectedValue) {
      alert("Please Select any one city")
    }

    this.weatherservice.getGeoCoord(this.selectedValue).then(
      (res) => {
        this.coOrdinates = res;
        this.getWeather(this.coOrdinates[0].lat, this.coOrdinates[0].lon)
        console.log(this.coOrdinates);
      })
  }

  getWeather(lat : any, lon: any) {
    this.weatherservice.getWeatherData(lat, lon).then(
      (res) => {
        this.weatherData = res;
        this.forecastDaily = this.weatherData.daily;
        // console.log(this.weatherData);
      })
  }



  }






















    // this.myWeather = this.weatherservice.weatherNow();
    // navigator.geolocation.getGeo((res) => {
    //   this.location = res.coords;
    //   const lat = this.location.latitude;
    //   const lon = this.location.longitude;
    //   this.weatherservice.localWeather(lat, lon).subscribe(
    //     (data) => {
    //       this.weatherData = data;
    //       this.forecastDaily = this.weatherData.daily;
    //       console.log(this.forecastDaily);
    //       console.log(this.weatherData);
    //     }
    //   )
    // })

// currentCity: any= "";
// onSubmit(weatherForm: NgForm) {
//   this.currentCity = this.selectedValue;

//   console.log(weatherForm);
//   this.weatherservice.otherCityWeather(this.selectedValue).subscribe(
//     (data) => {
//       this.weatherData = data;

//     }

//   )
//   console.log(this.weatherData);
// }

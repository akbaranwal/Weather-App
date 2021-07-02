import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/model/weather.model';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  myWeather: Weather[] = [];
  weatherData: any;
  forecastDaily: any[] = [];
  selectedValue: any = "";
  coOrdinates: any;
  cityData: any[] = [];
  selectedCity: any;

  constructor(private weatherservice : WeatherServiceService) { }
  ngOnInit(): void {
  }

  getWeather(lat : any, lon: any) {
    this.weatherservice.getWeatherData(lat, lon).then(
      (res) => {
        this.weatherData = res;
        this.forecastDaily = this.weatherData.daily;
        // console.log(this.weatherData);
      })
  }

  onsubmit(city : any) {
    this.weatherservice.getGeoCoord(this.selectedValue).then(
      (res) => {
        this.coOrdinates = res;
        this.getWeather(this.coOrdinates[0].lat, this.coOrdinates[0].lon)
        console.log(this.coOrdinates);
      })
    this.addPlaces(city);
  }

  addPlaces(city: any) {
    if (city) {
      if(localStorage.getItem('city')) {
        this.cityData = JSON.parse(localStorage.getItem('city'));
        this.cityData = [city, ...this.cityData];
      } else {
        this.cityData = [city];
      }
    }
    localStorage.setItem('city', JSON.stringify(this.cityData));
  }

  deleteCity() {
    const index = this.cityData.indexOf(this.selectedValue);
    this.cityData.splice(index, 1);
    localStorage.setItem('city',JSON.stringify(this.cityData))
  }

}




  // addPlaces(city) {
  //   let data = [];
  //   if (localStorage.getItem(city)) {
  //     data = JSON.parse(localStorage.getItem(city));
  //     data = [weatherStorage, ...data];
  //   } else {
  //     weatherStorage = [weatherStorage];
  //   }
  //   localStorage.setItem(city, JSON.stringify(weatherStorage))
  // }

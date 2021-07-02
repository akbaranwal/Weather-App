import { Weather } from './../model/weather.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  constructor(private httpClient: HttpClient) { }

  getGeoLocation(city : string) {
    let cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2ec6fc76777f50313cf7fc43e745efa9`
    return this.httpClient.get<any>(cityURL);
  }

  getGeoCoord(city: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.getGeoLocation(city).subscribe(
        (res) => {
          resolve(res)
        },
        (err) => { reject(err) }
      )
    })
  }

  localWeather(lat: any, lon: any) {
    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alert,minutely&appid=2ec6fc76777f50313cf7fc43e745efa9&units=metric`
    return this.httpClient.get<Weather[]>(forecastURL);
  }

  getWeatherData(lat: any, lon: any) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.localWeather(lat, lon).subscribe(
        (res) => {
          resolve(res)
        },
        (err) => { reject(err) }
      )
    })
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

}








  // getLocationService():Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(resp => {
  //       resolve({ long: resp.coords.longitude, lat: resp.coords.latitude })
  //     })
  //   })
  // }

  // localWeather(lat: string, lon: string) {
  //   let URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2ec6fc76777f50313cf7fc43e745efa9&units=metric`;
  //   return this.httpClient.get<Weather[]>(URL);
  // }

  // otherCityWeather(city: string) {
  //   let cityNameURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ec6fc76777f50313cf7fc43e745efa9&units=metric`;
  //   return this.httpClient.get<Weather[]>(cityNameURL);
  // }

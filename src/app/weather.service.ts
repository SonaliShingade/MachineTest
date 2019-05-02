import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey='d186a54229a6dbfa7adb3267cf1100f6'
  url;
  constructor(private http:HttpClient) { 
    this.url='http://api.openweathermap.org/data/2.5/weather?q=';
  }
  getWeather(city,code){
    return this.http.get(this.url+city+','+code+'&apiKey='+this.apiKey);
  }
}

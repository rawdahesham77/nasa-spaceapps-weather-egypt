import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http:HttpClient) { }
getWeatherProbability(lat: number, lon: number, month: number, weatherType: string) {
  return this.http.post(`http://localhost:3000/weather/probability`, {
    lat,
    lon,
    month,
    weatherType
  })
}



  
}

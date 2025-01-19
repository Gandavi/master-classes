import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MasterClassService {
  http = inject(HttpClient)
  

  baseApiUrl = 'https://api.master-classes.busuorg.ru/lk/'

  getMasterClassCard(){
    return this.http.get(`${this.baseApiUrl}master-classes?limit=20&page=1`)
  }
}

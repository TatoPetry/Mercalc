import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  getData(key: string) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  }

  setData(key: string, data: any) {
    const dados = JSON.stringify(data);
    localStorage.setItem(key, dados);
  }

}

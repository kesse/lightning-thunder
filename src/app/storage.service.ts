import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * save data to localStorage
   */
  public save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * get
   */
  public get(key: string): any {
    const data = localStorage.getItem(key);

    if (data)  {
      return JSON.parse(data);
    }

    return null;
  }
}

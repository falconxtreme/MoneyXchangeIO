import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public GetValue(key: string){
    let value: string = "";
    // Read environment variables from browser window
    const browserWindow = window || {};
    const browserWindowEnv = browserWindow['__env'] || {};

    if (browserWindowEnv.hasOwnProperty(key)) {
      value= window['__env'][key];
    }
    return value;
  }
}

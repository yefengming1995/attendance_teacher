import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {tryCatch} from "rxjs/util/tryCatch";
import {stringify} from "@angular/core/src/util";

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {
  storage=window.localStorage
  constructor() {
    console.log('Hello LocalStorageProvider Provider');
  }
  get(key:string,defaultValue:any):any{
    let value=this.storage.getItem(key);
    try{
      value=JSON.parse(value);
    }
    catch(error){
      value=null;
    }
    if(value==null && defaultValue){
      value=defaultValue;
    }
    return value;
  }
  set(key:string,value:any){
    this.storage.setItem(key,JSON.stringify(value));
  }
  remove(key:string){
    this.storage.removeItem(key);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentKeysService {

  public contentKey: string;
  public contentItemKey:string[] = [];

  // Grab our setting keys for this iPart from the DOM
  constructor() { 

    var elms = document.querySelectorAll("[id='x-contentItemKey']");
    console.log(elms)
  localStorage.setItem("indexCount",String(elms.length))
    for(let i = 0; i< elms.length; i++){
      this.contentItemKey.push(elms[i].attributes[2].value)
    }
    const ck = (document.querySelector("#x-contentKey") as HTMLInputElement).value;
    //const cik = (document.querySelector("#x-contentItemKey") as HTMLInputElement).value;

    this.contentKey = ck;
   // this.contentItemKey =cik; 
  }
}

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ContentKeysService {
  public contentKey: string[]=[];
  public contentItemKey:string[] = [];
  // Grab our setting keys for this iPart from the DOM
  constructor() { 
    var elms = document.querySelectorAll("[id='x-contentItemKey']");
    var ck = (document.querySelectorAll("#x-contentKey"))
    console.log(elms)
    localStorage.setItem("indexCount",String(elms.length))
    for(let i = 0; i< elms.length; i++){
      this.contentItemKey.push(elms[i].attributes[2].value)
      console.log(ck)
      this.contentKey.push(ck[i].attributes[2].value)
    }
  }
}
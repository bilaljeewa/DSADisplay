import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  proxy: boolean=false;
  baseUrl: string;
  authToken:string;
  selectedPartyId:string;
  loggedInPartyId:string;
  webSiteRoot:string;
  constructor() {
    var data = (document.querySelector('#__ClientContext') as HTMLInputElement).value;// document.querySelector("#__ClientContext").value;
    var appContext = JSON.parse(data);
    appContext.authToken = (document.querySelector('#__RequestVerificationToken') as HTMLInputElement).value;//document.querySelector("#__RequestVerificationToken").value;
    this.baseUrl = appContext.baseUrl;    
    this.authToken = appContext.authToken;
    this.webSiteRoot= appContext.websiteRoot;
    this.selectedPartyId = appContext.selectedPartyId;
    this.loggedInPartyId = appContext.loggedInPartyId;
  }
}


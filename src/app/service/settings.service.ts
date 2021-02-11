import { Injectable } from '@angular/core';
import { SectionsSettings } from '../models/SectionsSettings';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, delay, tap } from 'rxjs/operators';
import { HttpParams, HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { ContentKeysService } from './content-keys.service';
import { ContextService } from './context.service';
import { ServiceBase } from './service-base';
import { ClientSideContentItem, CriteriaData, QueryDefinitionData } from '../interfaces/asi.interfaces';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends ServiceBase {
  sharedData=Array()
  contentItmeKeyCounter: any=0;

  
	baseUrl: string;
	token: string;
	tokenGet: string;
	tokenPost: string;

  constructor(private http: HttpClient, private contentKeysService: ContentKeysService, contextService:ContextService)
   {
     super(contextService)
     //this.getContext();	
    
    
  }



  
  public GetSettings (): Observable<SectionsSettings>
  {










    







    
    let headers = this.getHeaders();
    let url = this.getUrl('ContentItem');
    
    const params = new HttpParams()   
    .set('contentKey', this.contentKeysService.contentKey)
    .set('contentItemKey',String(this.contentKeysService.contentItemKey));
    console.log('url: '+url);
    return this.http.get(url,{params,headers}).pipe(map((res:any)=>res.Settings)).pipe(catchError(this.handleError));
  }
  // public GetSettings (): Observable<SectionsSettings>
  // {
  //   let params;
    
  //   for(let i =0;i<this.contentKeys.contentItemKey.length; i++){
  //       if( i == this.contentItmeKeyCounter ){
  //         params = new HttpParams()
  //         .set('contentKey', this.contentKeys.contentKey)  
  //         .set('contentItemKey',this.contentKeys.contentItemKey[i]);
  //         this.contentItmeKeyCounter++;
  //         const headers = this.getHeaders();  
  //         const url = this.getUrl('ContentItem');
  //         //return this.http.get(url,{params,headers}).pipe(map((res: ClientSideContentItem)=>res.Settings)).pipe(catchError(this.handleError));
  //         return this.http.get(url,{params,headers}).pipe(map((res: any)=>res.Settings)).pipe(catchError(this.handleError));
  //       }else{
  //         console.log("return null")
  //       }
  //     }
    
  //   params = new HttpParams()
  //       .set('contentKey', this.contentKeys.contentKey)  
  //       .set('contentItemKey',this.contentKeys.contentItemKey[0]);
  //       this.contentItmeKeyCounter++;
  //       const headers = this.getHeaders();  
  //       const url = this.getUrl('ContentItem');
  //   return  this.http.get(url,{params,headers}).pipe(map((res: any)=>res.Settings)).pipe(catchError(this.handleError));
  // }



  public GetSettingsDSA (): Observable<SectionsSettings>
  {
    let params;
    
    for(let i =0;i<this.contentKeysService.contentItemKey.length; i++){
        if( i == this.contentItmeKeyCounter ){
          params = new HttpParams()
          .set('contentKey', this.contentKeysService.contentKey)  
          .set('contentItemKey',this.contentKeysService.contentItemKey[i]);
          this.contentItmeKeyCounter++;
          const headers = this.getHeaders();  
          const url = this.getUrl('ContentItem');
          //return this.http.get(url,{params,headers}).pipe(map((res: ClientSideContentItem)=>res.Settings)).pipe(catchError(this.handleError));
          console.log("stepppppp 2 + ",i)
          return this.http.get(url,{params,headers}).pipe(map((res: any)=>res.Settings)).pipe(catchError(this.handleError));
        }else{
          console.log("return null")
        }
      }
    
    params = new HttpParams()
        .set('contentKey', this.contentKeysService.contentKey)  
        .set('contentItemKey',this.contentKeysService.contentItemKey[0]);
        this.contentItmeKeyCounter++;
        const headers = this.getHeaders();  
        const url = this.getUrl('ContentItem');
        console.log("stepppppp  1")
    return  this.http.get(url,{params,headers}).pipe(map((res: any)=>res.Settings)).pipe(catchError(this.handleError));
  }

  GetSettingss(): Observable<any[]> {
   let data = [
    {"$type":"Asi.Soa.Core.DataContracts.PagedResult`1[[Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts]], Asi.Contracts","Items":{"$type":"System.Collections.Generic.List`1[[Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts]], mscorlib","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts","EntityTypeName":"9","Properties":{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyDataCollection, Asi.Contracts","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ResultRow","Value":"1"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EventCode","Value":"CELEBSTAFF"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"City","Value":"Victor Harbour"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Zip","Value":"5211"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Title","Value":"Celebrate Staff"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address2","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address3","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"BeginDate","Value":"2021-02-20T18:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Country","Value":"Australia"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Description","Value":"Your efforts this past year have made this a banner year!! Join us in celebrating what we&#39;ve all accomplished. Come party with us, and get some of your Holiday shopping out of the way!"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EndDate","Value":"2021-02-20T23:30:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingType","Value":"REG"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingUrl","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishEndDate","Value":"2021-02-20T23:59:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishStartDate","Value":"2021-01-01T00:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"StateProvince","Value":"SA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Status","Value":"A"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebEnabled","Value":{"$type":"System.Boolean","$value":true}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebViewOnly","Value":{"$type":"System.Boolean","$value":false}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address1","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ZipCity","Value":"5211 - Victor Harbour"}]}},{"$type":"Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts","EntityTypeName":"9","Properties":{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyDataCollection, Asi.Contracts","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ResultRow","Value":"2"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EventCode","Value":"GGNSW_CAMP"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"City","Value":"Sydney"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Zip","Value":"2000"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Title","Value":"GGNSW Large Camp"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address2","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address3","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"BeginDate","Value":"2021-04-01T09:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Country","Value":"Australia"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Description","Value":"Some Description"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EndDate","Value":"2021-04-02T16:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingType","Value":"NO"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingUrl","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishEndDate","Value":"2021-05-01T23:59:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishStartDate","Value":"2020-01-01T00:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"StateProvince","Value":"NSW"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Status","Value":"A"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebEnabled","Value":{"$type":"System.Boolean","$value":true}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebViewOnly","Value":{"$type":"System.Boolean","$value":false}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address1","Value":"1 Main St"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ZipCity","Value":"2000 - Sydney"}]}},{"$type":"Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts","EntityTypeName":"9","Properties":{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyDataCollection, Asi.Contracts","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ResultRow","Value":"3"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EventCode","Value":"TFD311220"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"City","Value":"Melbourne"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Zip","Value":"8000"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Title","Value":"Primary exam preparation webinars"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address2","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address3","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"BeginDate","Value":"2021-02-20T18:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Country","Value":"Australia"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Description","Value":"Join us for the primaryexam preparation webinars over the next 4 weeks with a number of sessions each week. Tutorials may be chosen as individual sessions or as the complete series. The aim of these webinars is to provide information on some of the topics that would normally have been delivered in local face-to-face exam preparation courses."},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EndDate","Value":"2021-02-20T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingType","Value":"CON"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingUrl","Value":"https://www.ema.co.nz/services/education/Pages/Computers-Web-Digital.aspx"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishEndDate","Value":"2021-02-20T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishStartDate","Value":"2021-01-01T00:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"StateProvince","Value":"SA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Status","Value":"A"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebEnabled","Value":{"$type":"System.Boolean","$value":true}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebViewOnly","Value":{"$type":"System.Boolean","$value":false}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address1","Value":"23 Main Street"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ZipCity","Value":"8000 - Melbourne"}]}},{"$type":"Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts","EntityTypeName":"9","Properties":{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyDataCollection, Asi.Contracts","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ResultRow","Value":"4"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EventCode","Value":"ERM091121"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"City","Value":"Gawler"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Zip","Value":"5118"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Title","Value":"EDU Risk Management NOV 2021"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address2","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address3","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"BeginDate","Value":"2021-11-09T08:30:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Country","Value":"Australia"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Description"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EndDate","Value":"2021-11-09T17:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingType","Value":"PD"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingUrl","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishEndDate","Value":"2021-11-09T17:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishStartDate","Value":"2020-11-06T14:51:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"StateProvince","Value":"SA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Status","Value":"A"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebEnabled","Value":{"$type":"System.Boolean","$value":true}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebViewOnly","Value":{"$type":"System.Boolean","$value":false}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address1","Value":"Level 1, 11 Barrack Street"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ZipCity","Value":"5118 - Gawler"}]}},{"$type":"Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts","EntityTypeName":"9","Properties":{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyDataCollection, Asi.Contracts","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ResultRow","Value":"5"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EventCode","Value":"ZPD301220"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"City","Value":"City"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Zip","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Title","Value":"Z Kate UAT Refund Test DEC 2020"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address2","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address3","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"BeginDate","Value":"2021-02-20T18:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Country","Value":"Australia"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Description"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EndDate","Value":"2021-02-20T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingType","Value":"Forum"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingUrl","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishEndDate","Value":"2021-02-20T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishStartDate","Value":"2021-01-01T08:29:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"StateProvince","Value":"SA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Status","Value":"A"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebEnabled","Value":{"$type":"System.Boolean","$value":true}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebViewOnly","Value":{"$type":"System.Boolean","$value":false}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address1","Value":"TBA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ZipCity","Value":" - City"}]}},{"$type":"Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts","EntityTypeName":"9","Properties":{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyDataCollection, Asi.Contracts","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ResultRow","Value":"6"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EventCode","Value":"ZDL311223"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"City","Value":"City"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Zip","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Title","Value":"Z Carter TEST Lunch DEC 2023"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address2","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address3","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"BeginDate","Value":"2023-12-31T18:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Country","Value":"Australia"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Description"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EndDate","Value":"2023-12-31T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingType","Value":"Lunch"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingUrl","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishEndDate","Value":"2023-12-31T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishStartDate","Value":"2019-10-14T14:30:10.317"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"StateProvince","Value":"SA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Status","Value":"A"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebEnabled","Value":{"$type":"System.Boolean","$value":true}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebViewOnly","Value":{"$type":"System.Boolean","$value":false}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address1","Value":"TBA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ZipCity","Value":" - City"}]}},{"$type":"Asi.Soa.Core.DataContracts.GenericEntityData, Asi.Contracts","EntityTypeName":"9","Properties":{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyDataCollection, Asi.Contracts","$values":[{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ResultRow","Value":"7"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EventCode","Value":"ZDL311291"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"City","Value":"City"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Zip","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Title","Value":"Z Jenny's Division Lunch DEC 2091"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address2","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address3","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"BeginDate","Value":"2091-12-31T18:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Country","Value":"Australia"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Description"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"EndDate","Value":"2091-12-31T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingType","Value":"Lunch"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"MeetingUrl","Value":""},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishEndDate","Value":"2091-12-31T22:00:00"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"PublishStartDate","Value":"2019-10-27T08:19:52.587"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"StateProvince","Value":"SA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Status","Value":"A"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebEnabled","Value":{"$type":"System.Boolean","$value":true}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"WebViewOnly","Value":{"$type":"System.Boolean","$value":false}},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"Address1","Value":"TBA"},{"$type":"Asi.Soa.Core.DataContracts.GenericPropertyData, Asi.Contracts","Name":"ZipCity","Value":" - City"}]}}]},"Offset":0,"Limit":100,"Count":7,"TotalCount":7,"NextPageLink":null,"HasNext":false,"NextOffset":0}
  ]
  this.sharedData = data;
   return of(data).pipe(delay(500));
   }


   getEventData (value,event):Observable<any[]> {
		const httpOptions = {
		  headers: this.getHeaders()
		}
    let url = this.getUrl('iqa')
   
   let par= this.getQueryParameters(value)
  
    //url = 'https://www.imisconsulting.com.au/iMIS0/api/iqa?QueryName=$/DSA/FTF/Next%20Upcoming%20FTF%20Event';
    url = url+'?QueryName='+value+'&parameter=&parameter='+event
   
   // url = 'https://www.imisconsulting.com.au/iMIS0/api/iqa?QueryName=$/DSA/FTF/All%20FTF%20Events'
		return this.http.get(url, httpOptions)
		  .pipe(map((res: any) => {
       
			return res.Items.$values;
		  }));
    }
    // getEventData (value):Observable<any[]> {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'RequestVerificationToken': this.token
    //     })
    //   }
    //   let url = this.getUrl('')
    //   console.log(url)
    //    url = url+'iqa?QueryName='+value
     
    //   return this.http.get(url, httpOptions)
    //     .pipe(map((res: any) => {
    //       console.log(res)
    //     return res.Items.$values;
    //     }));
    //   }

    getEventDatas (value):Observable<any[]> {
      const httpOptions = {
        headers: this.getHeaders()
      }
      let url = this.getUrl('iqa')
      
      url = url+'?QueryName='+value
      console.log(url);
     
      return this.http.get(url, httpOptions)
        .pipe(map((res: any) => {
          console.log(res)
        return res.Items.$values;
        }));
      }
    
    // private getContext() {
    //   var clientContextStr = (document.querySelector('#__ClientContext') as HTMLInputElement).value;
    //   var clientContext = JSON.parse(clientContextStr);
    //   this.token = (document.querySelector('#__RequestVerificationToken') as HTMLInputElement).value;
    //   this.baseUrl = clientContext.baseUrl;
    // }
    getEventDetails(event){
      let base = this.getUrl('')
      console.log("BASE >>>>>>>  ",base)

      let url = this.getWebSiteRoot('')
      url = url+'event.aspx?EventKey='+event
      console.log(url,"URLLLLLLLLLLLLLLLLLLLLL")
      window.open(url)

    }

  
  handleError(error: HttpErrorResponse) {
    
    return throwError(error);
  }
  public getQueryParameters(queryPath: string): Observable<QueryDefinitionData> {
    console.log("step 11")
    return this.getLiveQueryParameters(queryPath);
    //else return this.getFakedQueryParameters(queryPath);
  }

  //use HTTP POST to get Query parameters.
  private getLiveQueryParameters(queryPath: string): Observable<any> {
   
    const httpOptions = {
      headers:this.getHeaders()
    };
    //this is the POST request body for getting a (IQA) QueryDefinition.
    let findBypath = {
      "$type": "Asi.Soa.Core.DataContracts.GenericExecuteRequest, Asi.Contracts",
      "OperationName": "FindByPath",
      "EntityTypeName": "QueryDefinition",
      "Parameters": {
        "$type": "System.Collections.ObjectModel.Collection`1[[System.Object, mscorlib]], mscorlib",
        "$values": [
          {
            "$type": "System.String",
            "$value": queryPath //particular query.
          }
        ]
      },
      "ParameterTypeName": {
        "$type": "System.Collections.ObjectModel.Collection`1[[System.String, mscorlib]], mscorlib",
        "$values": [
          "System.String"
        ]
      },
      "UseJson": false
    }

    //use baseUrl gathered earlier from ClientContent to get relative path of restful operation.
    let url = this.baseURL+'api/QueryDefinition/_execute';
   
    return this.http.post(url, findBypath, httpOptions).pipe(map((res: any) => { 
     
      return res; }));
    //{console.log(res); return res}));

  }

}
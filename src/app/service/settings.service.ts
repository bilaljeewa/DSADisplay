import { Injectable } from '@angular/core';
import { SectionsSettings } from '../models/SectionsSettings';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, delay, tap } from 'rxjs/operators';
import { HttpParams, HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { ContentKeysService } from './content-keys.service';
import { ContextService } from './context.service';
import { ServiceBase } from './service-base';
import { ClientSideContentItem, CriteriaData, QueryDefinitionData } from '../interfaces/asi.interfaces';
@Injectable({
  providedIn: 'root'
})
export class SettingsService extends ServiceBase {
  sharedData=Array()
  contentItmeKeyCounter: any=0;
  contentItemKeyID: any;
  baseUrl: string;
	token: string;
	tokenGet: string;
	tokenPost: string;
  constructor(private http: HttpClient, private contentKeysService: ContentKeysService, contextService:ContextService)
  {
    super(contextService)
  }
  public GetSettingsDSA (): Observable<SectionsSettings>
  {
    let params;
    for(let i =0;i<this.contentKeysService.contentItemKey.length; i++){
        if( i == this.contentItmeKeyCounter ){
          params = new HttpParams()
          .set('contentKey', this.contentKeysService.contentKey[i])  
          .set('contentItemKey',this.contentKeysService.contentItemKey[i]);
          this.contentItmeKeyCounter++;
          const headers = this.getHeaders();  
          const url = this.getUrl('ContentItem');
          return this.http.get(url,{params,headers,withCredentials: true}).pipe(map((res: any)=>res)).pipe(catchError(this.handleError));
        }else{
          console.log("return null")
        }
      }
      params = new HttpParams()
        .set('contentKey', this.contentKeysService.contentKey[0])  
        .set('contentItemKey',this.contentKeysService.contentItemKey[0]);
        this.contentItmeKeyCounter++;
        const headers = this.getHeaders();  
        const url = this.getUrl('ContentItem');
    return  this.http.get(url,{params,headers,withCredentials: true}).pipe(map((res: any)=>res)).pipe(catchError(this.handleError));
  }
  getEventData (value,event):Observable<any[]> {
		const httpOptions = {
		  headers: this.getHeaders()
		}
    let url = this.getUrl('iqa')
    let par= this.getQueryParameters(value)
    url = url+'?QueryName='+value+'&parameter=&parameter='+event
  	return this.http.get(url, httpOptions)
		  .pipe(map((res: any) => {
  		return res.Items.$values;
    }));
  }
  
  getEventDatas (value):Observable<any[]> {
    const httpOptions = {
      headers: this.getHeaders()
    }
    let url = this.getUrl('iqa')
    url = url+'?QueryName='+value
    return this.http.get(url, httpOptions)
      .pipe(map((res: any) => {
      return res.Items.$values;
    }));
  }

  getGIData (value,event):Observable<any[]> {
    const httpOptions = {
      headers: this.getHeaders()
    }
    let url = this.getUrl('iqa')
    url = url+'?QueryName='+value+'&parameter='+event
    return this.http.get(url, httpOptions)
      .pipe(map((res: any) => {
      return res.Items.$values;
    }));
  }
  getEventDetails(event){
    let base = this.getUrl('')
    let url = this.getBase('')
    url = url+'event.aspx?EventKey='+event
    window.open(url)
  }
  
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  public getQueryParameters(queryPath: string): Observable<QueryDefinitionData> {
    return this.getLiveQueryParameters(queryPath);
  }

  private getLiveQueryParameters(queryPath: string): Observable<any> {
    const httpOptions = {
      headers:this.getHeaders()
    };
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
    let url = this.baseURL+'api/QueryDefinition/_execute';
    return this.http.post(url, findBypath, httpOptions).pipe(map((res: any) => { 
      return res; 
    }));
  }

  postGPdata(dataJson,urls): Observable<any> {
    let findBypath = dataJson
    let url = 'https://api.facethefacts.org.au/DSAWebApi/api/FaceTheFacts/'+this.getSelectedID();
    return this.http.post(url, findBypath).pipe(map((res: any) => { 
      return res; 
    }));
  }

  getSupportRef(event,testId){
    if(event == 0){
      window.open(this.getWebSiteRoot('')+'Info/poc?TestId='+testId)
    }else{
     
      window.open('https://www.facethefacts.org.au/Info/Get_Support/Info/Contact_and_Support.aspx')
    }
  }
}
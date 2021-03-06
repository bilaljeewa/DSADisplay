import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { ContextService } from './context.service';
import { throwError } from 'rxjs';

export class ServiceBase {
    baseURL: any;
    constructor(private contextService: ContextService){   
        this.baseURL = this.contextService.baseUrl     
    }
    getHeaders(): HttpHeaders{
        if(this.contextService.proxy)
            return new HttpHeaders().set('Authorization','Bearer '+ this.contextService.authToken).set('Content-Type','application/json');
        return new HttpHeaders().set('RequestVerificationToken', this.contextService.authToken).set('Content-Type','application/json').set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Methods','OPTIONS, HEAD, DELETE, POST, GET');
    }
    getUrl(request:string):string{
        if(this.contextService.proxy)
            return 'api/'+request;
        return this.contextService.baseUrl+'api/'+request;
    }
    getBase(request:string):string{
        if(this.contextService.proxy)
            return ''+request;
        return window.location.origin+this.contextService.baseUrl;
    }
    getWebSiteRoot(request:string):string{
        if(this.contextService.proxy)
            return 'api/'+request;
        return this.contextService.webSiteRoot+request;
    }
    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
    getSelectedID(){
        return this.contextService.selectedPartyId
    }
    
}
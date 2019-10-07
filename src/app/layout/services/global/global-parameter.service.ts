import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalParameterService  {
    private strKeyFindApiUrl: string = "ApiUrl";
    private strKeyFindApiAccess: string = "ApiAccessKey";
    private strKeyFindMinutesInMemory: string = "MinutesInMemory";
    private strApiServerURL: string = "";
    private strApiAccessKey: string = "";
    private strErrorCallService:string="";
    private numMinutesInMemory: number;

    constructor(private environmentService: EnvironmentService) { 
    }

    public getError():string{
        return this.strErrorCallService;
    }
    
    public getUrlBaseWebAPI():string {
        this.strApiServerURL  = this.environmentService.GetValue(this.strKeyFindApiUrl);
        console.log(this.strApiServerURL);
        return this.strApiServerURL;
    }

    public getUrlAccessKeyAPI():string {
        this.strApiAccessKey = this.environmentService.GetValue(this.strKeyFindApiAccess);
        console.log(this.strApiAccessKey);
        return this.strApiAccessKey;
    }

    public getMinutesInMemory():number {
        this.numMinutesInMemory = parseInt(this.environmentService.GetValue(this.strKeyFindMinutesInMemory));
        console.log(this.numMinutesInMemory);
        return this.numMinutesInMemory;
    }

    private log(msj){
        console.log(msj);
        this.strErrorCallService = msj;
    }

    public handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
        
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
        
            // Let the app keep running by returning an empty result.
            return of(result as T);
        }
    }

 
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SectionsSettings } from 'src/app/models/SectionsSettings';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-date-location',
  templateUrl: './date-location.component.html',
  styleUrls: ['./date-location.component.css']
})
export class DateLocationComponent implements OnInit {
  @Input() settings;
  countryCtrl
  eventData=Array()
  sharedData=Array()
  check: any="2021-02-20T18:00:00";
  constructor(public settingsService: SettingsService) {
    this.countryCtrl = new FormControl();
   
 
    
  
     
     
   
    
    
  }



  ngOnInit(): void {
    let url = window.location.search
    if(url && url.split && url.split("EventKey=")){
      let KeyEvents = url.split('EventKey=')
 
      let keys = KeyEvents[1]
      let keys2 = keys.split('&').length
      let keys3;
     
       if(keys2 > 1){
         keys3 = keys.split('&')[0]
       }else{
         keys3 = keys
       }
     
      if(this.settings && this.settings){
       
        this.settingsService.getEventData(this.settings.IQA,keys3).subscribe(values=>{
     
               this.eventData= values[0].Properties.$values
               let desc;
               let dayLeft;
               let address;
               let city;
               let endDate;
               this.eventData.forEach(resp=>{
                if(resp.Name == 'AdditionalDescription'){
                  desc = resp.Value
                }else if(resp.Name == 'StartDateTime'){
                  dayLeft = resp.Value
                }else if(resp.Name == 'Address1'){
                  address = resp.Value
                }else if(resp.Name == 'City'){
                  city = resp.Value
                }else if(resp.Name == 'EndDateTime'){
                  endDate = resp.Value
                }
               
               })
               this.sharedData.push({desc,dayLeft,address,city,endDate})
             
            })
        }
    }
    
   
  }



//   dateFormate(value){
//     var time = new Date(value);
//     let ampm =  time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
   
// return ampm
//   }
 
 

}

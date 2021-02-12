import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/service/settings.service';
declare var jQuery:any;
@Component({
  selector: 'app-view-all-event',
  templateUrl: './view-all-event.component.html',
  styleUrls: ['./view-all-event.component.css']
})
export class ViewAllEventComponent implements OnInit {
  @Input() settings;
  searchArray=[]
  eventData=Array()
  sharedData=Array()

  countryCtrl: FormControl;

  filteredCountry: Observable<any[]>;
  
  
  zipState=Array()
  constructor(public settingsService: SettingsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      var elements = document.querySelectorAll(".ViewAllLocation");

        console.log("qeury sectory alll ",elements)

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',()=>{
              console.log("View All location CLICK",i)

              jQuery("#viewAllEventModal").modal('show')
            } );
        }
      }, 100);
    
      this.settingsService.getEventDatas("$/DSA/FTF/All FTF Events").subscribe(values=>{
        console.log(values)
        this.eventData= values
    // console.log(this.eventData)
      this.eventData.forEach(resp=>{
        console.log(resp.Properties.$values)
        let city='';
        let  address1='';
        let BeginDate='';
        let eventcode=''
        resp.Properties.$values.forEach(element => {
          // console.log(element.Name)
          
          if(element.Name == 'City'){
          
            city = element.Value
          }else if(element.Name == 'Address1'){
            address1 = element.Value
          }else if(element.Name == 'StartDateTime'){
            BeginDate = element.Value
          }else if(element.Name == 'EventId'){
            eventcode= element.Value
          }
          
        
        });
        console.log(city,address1,BeginDate)
        this.sharedData.push({city,address1,BeginDate,eventcode})
      })
      })
    
  }
  sendTo(event){
    this.settingsService.getEventDetails(event)
    
    
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { SettingsService } from 'src/app/service/settings.service';
declare var jQuery:any;
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() settings;
  countryCtrl
  
  eventData=Array()
  sharedData=Array()
  check: any="2021-02-20T18:00:00";
  constructor( public settingsService: SettingsService) { }

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
        
        if(this.settings && this.settings.IQA){
          this.settingsService.getEventData(this.settings.IQA,keys3).subscribe(values=>{
          
             this.eventData= values[0].Properties.$values
             let desc;
             let dayLeft;
             let address;
             this.eventData.forEach(resp=>{
              if(resp.Name == 'AdditionalDescription'){
                desc = resp.Value
              }else if(resp.Name == 'StartDateTime'){
                dayLeft = resp.Value
              }else if(resp.Name == 'Address1'){
                address = resp.Value
              }
             
             })
             this.sharedData.push({desc,dayLeft,address})
             
          })
        }
    }
    
    
  }
  // openViewModal(){
  //   console.log("open modal ")
  //   let but = (<HTMLElement>document.querySelectorAll(".viewAllEventButton")[0])
  //   console.log("evnt ",but)
  //   but.click()
  //   jQuery("#viewAllEventModal").modal('show')
  // }
  // do(event) {
	// 	event.preventDefault();
	// }
  openViewModal(){
    
    setTimeout(() => {
      jQuery('#viewAllEventModal').modal('show');
       }, 500);
    // jQuery("#viewAllEventModal").modal('show')
  }
  do(event) {
		event.preventDefault();
	}


}

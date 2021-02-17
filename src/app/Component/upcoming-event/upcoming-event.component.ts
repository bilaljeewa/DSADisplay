import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/service/settings.service';
declare var jQuery:any;
@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent implements OnInit {
  @Input() settings;
  countryCtrl
  
  eventData=Array()
  sharedData=Array()
  check: any="2021-02-20T18:00:00";
  constructor( public settingsService: SettingsService) { }

  ngOnInit(): void {
    // console.log("event data ", this.settings)
    if(this.settings && this.settings.IQA){
      this.settingsService.getEventDatas(this.settings.IQA).subscribe(values=>{
        //  console.log(values)
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
        //  console.log(this.sharedData)
      })
    }
  }
  openViewModal(){
    // console.log("open modal upcoming ")
    setTimeout(() => {
      jQuery('#viewAllEventModal').modal('show');
       }, 500);
    // jQuery("#viewAllEventModal").modal('show')
  }
  do(event) {
		event.preventDefault();
	}

}

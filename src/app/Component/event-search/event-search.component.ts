import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/service/settings.service';
declare var jQuery:any;
@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  @Input() settings;
  searchArray=[]
  eventData=Array()
  sharedData=Array()

  countryCtrl: FormControl;

  filteredCountry: Observable<any[]>;
  
  
  zipState=Array()
  constructor( public settingsService: SettingsService,public dialog: MatDialog) { 
    this.countryCtrl = new FormControl();
    
    this.countryCtrl.valueChanges.subscribe(value=>{
      if(value){
        this.filtercountry(value)
      }
    })
  }

  ngOnInit(): void {
  
    if(this.settings && this.settings.IQA){
      this.settingsService.getEventDatas(this.settings.IQA).subscribe(values=>{
    
        this.eventData= values
    // console.log(this.eventData)
      this.eventData.forEach(resp=>{
        
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
       
        this.sharedData.push({city,address1,BeginDate,eventcode})
      })
      })
    }

    let clcikc= document.getElementById('MainBody')!
       console.log(clcikc)
      //  for(let i =clcikc.length-1; i<=clcikc.length-1;i++){
        
       clcikc.onclick = function(e) {
         if(e.target !=  document.getElementsByClassName('sep-event')[document.getElementsByClassName('sep-event').length -1]) {
             console.log('You clicked outside');
             const elmd = document.getElementsByClassName('dropdownMenuBtnSCTs')!as HTMLCollectionOf<HTMLElement>;
           
             let nextsb= elmd[elmd.length-1];
             console.log(nextsb)
             if(nextsb){
              nextsb.style.display='none'
             }
         } else {
             console.log('You clicked inside');
         }
       }
     

  }
  filtercountry(name: string) {
   
    this.zipState=[]
   
   this.eventData.filter(country => {
      let eventCODEValue = '';
      country['Properties']['$values'].forEach(element => {
      
        if(element.Name == "EventId"){
eventCODEValue = element.Value
        }
        if(element.Name == "ZipLocality"){
         
          if(element.Value.toLowerCase().includes(name.toLowerCase())) {
            const elmd = document.getElementsByClassName('dropdownMenuBtnSCTs')!as HTMLCollectionOf<HTMLElement>;
           console.log(elmd)
            let nextsb= elmd[elmd.length-1];
            console.log(nextsb)
            if(nextsb){
              nextsb.style.display='block'
            }
            this.zipState.push({'eventCode':eventCODEValue,'Name': element.Value})
          }
        
        }
      });
      
      
      
     
     
      
   })
  
   
    
   
   
    
    
  }
  sendTo(event){
    this.settingsService.getEventDetails(event)
   
    
  }
  openViewModal(){
    console.log("open modal upcoming ")
    setTimeout(() => {
      jQuery('#viewAllEventModal').modal('show');
       }, 500);
    // jQuery("#viewAllEventModal").modal('show')
  }
  do(event) {
		event.preventDefault();
	}
}

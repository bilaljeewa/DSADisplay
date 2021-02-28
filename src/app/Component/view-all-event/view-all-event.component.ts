import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  letInform: FormGroup;
  
  zipState=Array()
  constructor(public settingsService: SettingsService,public fb: FormBuilder) {
    this.createTable()
   }
   createTable(){
     this.letInform=this.fb.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      mobile: ['',Validators.required],
      message: ['',Validators.required],
      email: ['',Validators.required],
      acceptCondtion: ['',Validators.required]
     })
     
       
   }

  ngOnInit(): void {
    setTimeout(() => {
      var elements = document.querySelectorAll(".ViewAllLocation");

        // console.log("qeury sectory alll ",elements)

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',()=>{
              // console.log("View All location CLICK",i)

              jQuery("#viewAllEventModal").modal('show')
            } );
        }
        var elements = document.querySelectorAll(".LetsTalk");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',()=>{
              console.log("clicklet taklk >>>>>>>>",i)
              jQuery("#viewAllEventModals").modal('show')
            } );
        }
        var elements = document.querySelectorAll(".StayInformed");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',()=>{
              console.log("clicklet informed >>>>>>>>",i)
              jQuery("#viewAllEventModalss").modal('show')
            } );
        }
        
      }, 100);
    
      this.settingsService.getEventDatas("$/DSA/FTF/All FTF Events").subscribe(values=>{
        // console.log(values)
        this.eventData= values
    // console.log(this.eventData)
      this.eventData.forEach(resp=>{
        // console.log(resp.Properties.$values)
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
        // console.log(city,address1,BeginDate)
        this.sharedData.push({city,address1,BeginDate,eventcode})
      })
      })
    
  }
  sendTo(event){
    this.settingsService.getEventDetails(event)
    
    
  }
  sendStayInformed(){
    console.log(this.letInform)
    if(this.letInform.status == 'VALID'){
      let data = this.letInform.getRawValue()
      console.log(data)
      this.settingsService.postGPdata(data,'FaceTheFactsStayInformed').subscribe(resp=>{
        console.log(resp)
      })
    }else{

    }
    
  }
  sendLoginInformed(){
    console.log(this.letInform)
    if(this.letInform.status == 'VALID'){
      let data = this.letInform.getRawValue()
      console.log(data)
      this.settingsService.postGPdata(data,'FaceTheFactsLetsTalk').subscribe(resp=>{
        console.log(resp)
      })
    }else{
      
    }
    
  }
  do(event) {
		event.preventDefault();
	}

}

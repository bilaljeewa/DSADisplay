import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkInform: FormGroup
  constructor(public settingsService: SettingsService,public fb: FormBuilder) {
    this.createTable()
   }
   createTable(){
     this.checkInform=this.fb.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      mobile: ['',Validators.required],
      noOfChildren: ['',Validators.required],
      noOfAdults: ['',Validators.required],
      email: ['',Validators.required],
      acceptCondtion: ['',Validators.required],
      EventKey: ['',Validators.required]
     })
     
       
   }
  ngOnInit(): void {
    let url = window.location.search
    console.log("url >>>>>>",url)
    if(url && url.split && url.split("EventKey=")){
      let KeyEvents = url.split('EventKey=')
      console.log("KeyEvents >>>>>>>>",KeyEvents)
      let keys = KeyEvents[1]
      if(keys){
        console.log("KeyEvents if >>>>>>>>",keys)
        
        let keys2 = keys.split('&').length
        let keys3;
       
         if(keys2 > 1){
           keys3 = keys.split('&')[0]
         }else{
           keys3 = keys
         }
         console.log("KeyEvents final >>>>>>",keys3)
         this.checkInform.get('EventKey')?.setValue(keys3)
        }
    }     
  }
  do(event) {
		event.preventDefault();
	}
  saveCheckIn(){
    console.log(this.checkInform)
    if(this.checkInform.status == 'VALID'){
      let data = this.checkInform.getRawValue()
      console.log(data)
      this.settingsService.postGPdata(data,'FaceTheFactsCheckIn').subscribe(resp=>{
        console.log(resp)
      })
    }else{
      
    }
  }
}

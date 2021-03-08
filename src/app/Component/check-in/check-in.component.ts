import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkInform: FormGroup
  MainKeyValue: any;
  constructor(public settingsService: SettingsService,
              private _snackBar: MatSnackBar,
              public fb: FormBuilder) {
    this.createTable()
   }
   createTable(){
     this.checkInform=this.fb.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      mobile: ['',Validators.required],
      noOfChildren: ['',Validators.required],
      noOfAdults: ['',Validators.required],
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
      acceptCondtion: ['',Validators.required],
      Type: ['CheckIn']
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
        this.MainKeyValue= keys3
        }
    }     
  }
  do(event) {
		event.preventDefault();
	}
  saveCheckIn(){
    console.log(this.checkInform)
    if(this.checkInform.status == 'VALID'){
      let jsonData = String.raw`{"EventKey":"{\"value\":\"`+this.MainKeyValue+String.raw`\",\"score\":0}","adults":"{\"value\":\"`+this.checkInform.get(`noOfAdults`)?.value+String.raw`\",\"score\":0}","children":"{\"value\":\"`+this.checkInform.get(`noOfChildren`)?.value+String.raw`\",\"score\":0}","mobile":"{\"value\":\"`+this.checkInform.get(`mobile`)?.value+String.raw`\",\"score\":0}","firstname":"{\"value\":\"`+this.checkInform.get(`fName`)?.value+String.raw`\",\"score\":0}","lastname":"{\"value\":\"`+this.checkInform.get(`lName`)?.value+String.raw`\",\"score\":0}","email":"{\"value\":\"`+this.checkInform.get(`email`)?.value+String.raw`\",\"score\":0}","Type":"{\"value\":\"CheckIn\"}"}`
      this.settingsService.postGPdata(jsonData,'FaceTheFactsCheckIn').subscribe(resp=>{
        console.log(resp)
        this.checkInform.reset();
        this.openSnackBar('Information Sent Successfully','')
      })
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }
  openNew(){
    window.open('https://www.diabetessa.com.au/Web/Terms_and_Conditions/Terms_and_Conditions.aspx')
  }
}

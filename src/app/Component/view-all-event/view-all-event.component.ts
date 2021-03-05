import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/service/settings.service';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  constructor(public settingsService: SettingsService,
              private _snackBar: MatSnackBar,
              public fb: FormBuilder) {
    this.createTable()
   }
   createTable(){
     this.letInform=this.fb.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      mobile: ['',Validators.required],
      message: ['',Validators.required],
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
      acceptCondtion: ['',Validators.required],
      
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
      let jsonData = String.raw`{"message":"{\"value\":\"`+this.letInform.get(`message`)?.value+String.raw`\",\"score\":0}","mobile":"{\"value\":\"`+this.letInform.get(`phone`)?.value+String.raw`\",\"score\":0}","firstname":"{\"value\":\"`+this.letInform.get(`fName`)?.value+String.raw`\",\"score\":0}","lastname":"{\"value\":\"`+this.letInform.get(`lName`)?.value+String.raw`\",\"score\":0}","email":"{\"value\":\"`+this.letInform.get(`email`)?.value+String.raw`\",\"score\":0}","Type":"{\"value\":\"StayInformed\"}"}`
       
      console.log(jsonData)
      this.settingsService.postGPdata(jsonData,'FaceTheFactsStayInformed').subscribe(resp=>{
        console.log(resp)
        this.letInform.reset()
        this.openSnackBar('Information Sent Successfully','')
      })
    }else{

    }
    
  }
  sendLoginInformed(){
    console.log(this.letInform)
    // this.letInform.get('Type')?.setValue('LetsTalk')
    if(this.letInform.status == 'VALID'){
      let jsonData =
      String.raw`{"message":"{\"value\":\"`+this.letInform.get(`message`)?.value+String.raw`\",\"score\":0}","mobile":"{\"value\":\"`+this.letInform.get(`phone`)?.value+String.raw`\",\"score\":0}","firstname":"{\"value\":\"`+this.letInform.get(`fName`)?.value+String.raw`\",\"score\":0}","lastname":"{\"value\":\"`+this.letInform.get(`lName`)?.value+String.raw`\",\"score\":0}","email":"{\"value\":\"`+this.letInform.get(`email`)?.value+String.raw`\",\"score\":0}","Type":"{\"value\":\"LetsTalk\"}"}`
      // {
      //   "Type": {"value":"LetsTalk"},
      //   "firstname":{"value":this.letInform.get('fName')?.value},
      //   "lastname":{"value":this.letInform.get('lName')?.value},
      //   "mobile":{"value":this.letInform.get('mobile')?.value},
      //   "email":{"value":this.letInform.get('email')?.value},
      //   "message":{"value":this.letInform.get('message')?.value},
      // }
     console.log(jsonData)
      this.settingsService.postGPdata(jsonData,'FaceTheFactsLetsTalk').subscribe(resp=>{
        console.log(resp)
        this.letInform.reset()
        this.openSnackBar('Information Sent Successfully','')
      })
    }else{
      
    }
    
  }
  do(event) {
		event.preventDefault();
	}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  openNew(){
    window.open('https://www.diabetessa.com.au/Web/Terms_and_Conditions/Terms_and_Conditions.aspx')
  }

}

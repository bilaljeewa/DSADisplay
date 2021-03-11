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
			for (var i = 0; i < elements.length; i++) {
				elements[i].addEventListener('click',()=>{
					jQuery("#viewAllEventModal").modal('show')
				});
			}
			var elements = document.querySelectorAll(".LetsTalk");
			for (var i = 0; i < elements.length; i++) {
				elements[i].addEventListener('click',()=>{
					jQuery("#viewAllEventModals").modal('show')
				});
			}
			var elements = document.querySelectorAll(".StayInformed");
			for (var i = 0; i < elements.length; i++) {
				elements[i].addEventListener('click',()=>{
					jQuery("#viewAllEventModalss").modal('show')
				});
			}
		}, 100);
		
		this.settingsService.getEventDatas("$/DSA/FTF/All FTF Events").subscribe(values=>{
			this.eventData= values
			this.eventData.forEach(resp=>{
				let city='';
				let  address1='';
				let BeginDate='';
				let eventcode='';
				let endDate=''
				
				resp.Properties.$values.forEach(element => {
					
					if(element.Name == 'City'){
						city = element.Value
					}else if(element.Name == 'Address1'){
						address1 = element.Value
					}else if(element.Name == 'StartDateTime'){
						BeginDate = element.Value
					}else if(element.Name == 'EndDateTime'){
						endDate = element.Value
					  }else if(element.Name == 'EventId'){
						eventcode= element.Value
					}
				});
				this.sharedData.push({city,address1,BeginDate,eventcode,endDate})
			})
		})
	}
	sendTo(event){
		this.settingsService.getEventDetails(event)
	}
	sendStayInformed(){
		console.log(this.letInform)
		if(this.letInform.status == 'VALID'){
			let jsonData = String.raw`{"message":"{\"value\":\"`+this.letInform.get(`message`)?.value+String.raw`\",\"score\":0}","mobile":"{\"value\":\"`+this.letInform.get(`mobile`)?.value+String.raw`\",\"score\":0}","firstname":"{\"value\":\"`+this.letInform.get(`fName`)?.value+String.raw`\",\"score\":0}","lastname":"{\"value\":\"`+this.letInform.get(`lName`)?.value+String.raw`\",\"score\":0}","email":"{\"value\":\"`+this.letInform.get(`email`)?.value+String.raw`\",\"score\":0}","Type":"{\"value\":\"StayInformed\"}"}`
			this.settingsService.postGPdata(jsonData,'FaceTheFactsStayInformed').subscribe(resp=>{
				console.log(resp)
				this.letInform.reset()
				// this.openSnackBar('Information Sent Successfully','')
			})
			this.letInform.reset()
			jQuery("#viewAllEventModalss").modal('hide')
				this.openSnackBar('Information Sent Successfully','')
				
		}
	}
	sendLoginInformed(){
		console.log(this.letInform)
		if(this.letInform.status == 'VALID'){
			
			let jsonData =String.raw`{"message":"{\"value\":\"`+this.letInform.get(`message`)?.value+String.raw`\",\"score\":0}","mobile":"{\"value\":\"`+this.letInform.get(`mobile`)?.value+String.raw`\",\"score\":0}","firstname":"{\"value\":\"`+this.letInform.get(`fName`)?.value+String.raw`\",\"score\":0}","lastname":"{\"value\":\"`+this.letInform.get(`lName`)?.value+String.raw`\",\"score\":0}","email":"{\"value\":\"`+this.letInform.get(`email`)?.value+String.raw`\",\"score\":0}","Type":"{\"value\":\"LetsTalk\"}"}`
			
			this.settingsService.postGPdata(jsonData,'FaceTheFactsLetsTalk').subscribe(resp=>{
				console.log(resp)
				
				// this.openSnackBar('Information Sent Successfully','')
			})
			this.letInform.reset()
			jQuery("#viewAllEventModals").modal('hide')
			this.openSnackBar('Information Sent Successfully','')
			
		}
	}
	do(event) {
		event.preventDefault();
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			duration: 3000,
			panelClass: ['red-snackbar']
		});
	}
	openNew(){
		window.open('https://www.facethefacts.org.au/Info/terms_and_conditions.aspx')
	}
	dateFormate(value){
		console.log(value)
		var time = new Date(value);

		let ampm =  time.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', hour12: true })
	   
	return ampm
	  }

}

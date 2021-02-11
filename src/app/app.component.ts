import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SectionsSettings } from './models/SectionsSettings';
import { SettingsService } from './service/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	DSAType: any;
	DSAIQA: any;
	title = 'DSADisplay';
	countryCtrl
	settings: SectionsSettings = new SectionsSettings();
	eventData=Array()
	sharedData=Array()
	check: any="2021-02-20T18:00:00";
	constructor(public settingsService: SettingsService) {
		this.countryCtrl = new FormControl();
	
	
		
		this.settingsService.GetSettingsDSA().subscribe(value=>{
			console.log(value)
			this.settings=value;
			console.log(this.settings)
			if(this.settings && this.settings.DSAType){
				console.log("DSA TYPE : ", this.settings)
				this.DSAType = this.settings.DSAType
				

			}
			
			if(this.settings && this.settings.IQA){
			
				
			}
		
		})
		
		
	}
	dateFormate(value){
		var time = new Date(value);
		let ampm =  time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
	
		return ampm
	}
}

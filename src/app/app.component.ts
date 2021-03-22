import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SectionsSettings } from './models/SectionsSettings';
import { SettingsService } from './service/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	eventsSubject: Subject<void> = new Subject<void>();
	DSAType: any;
	DSAIQA: any;
	title = 'DSADisplay';
	countryCtrl
	settings: SectionsSettings = new SectionsSettings();
	eventData=Array()
	sharedData=Array()
	check: any="2021-02-20T18:00:00";
	contentkeyItems: any;
	counts: number=0;
	constructor(public settingsService: SettingsService) {
		this.countryCtrl = new FormControl();
		this.settingsService.GetSettingsDSA().subscribe(value=>{
			if(value && value['Settings']){
				this.settings=value['Settings'];
				this.contentkeyItems = value['ContentItemKey']
				if(this.settings && this.settings.DSAType){
					this.DSAType = this.settings.DSAType
				}
			}
		})
	}
}

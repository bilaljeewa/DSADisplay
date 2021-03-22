import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from 'src/app/service/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerGroup: FormGroup
  MainKeyValue: any;
  constructor(public settingsService: SettingsService,
              private _snackBar: MatSnackBar,
              public fb: FormBuilder) {
    this.createTable()
   }
   createTable(){
     this.footerGroup=this.fb.group({
      pEmail:['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]], 
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
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
  saveFooterEmail(){
    console.log(this.footerGroup)
   
    if(this.footerGroup.status == 'VALID'){
      let jsonData = String.raw`{"youremail":"{\"value\":\"`+this.footerGroup.get(`pEmail`)?.value+String.raw`\",\"score\":0}","email":"{\"value\":\"`+this.footerGroup.get(`email`)?.value+String.raw`\",\"score\":0}","Type":"{\"value\":\"SpreadTheWord\"}"}`
      this.settingsService.postGPdata(jsonData,'FaceTheFactsCheckIn').subscribe(resp=>{
        console.log(resp)
        this.footerGroup.reset();
        // this.openSnackBar('Information Sent Successfully','')
      })
      this.openSnackBar('Information Sent Successfully','')
      this.footerGroup.reset();
    }
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['red-snackbar']
    });
  }

}

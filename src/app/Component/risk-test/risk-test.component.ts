import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { SettingsService } from 'src/app/service/settings.service';
import { v4 as uuid } from 'uuid';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var jQuery:any;
@Component({
  selector: 'app-risk-test',
  templateUrl: './risk-test.component.html',
  styleUrls: ['./risk-test.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class RiskTestComponent implements OnInit {
  resultStatus: boolean=false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  finalFormGroup!: FormGroup;
  viewResultData: boolean;
  newHeight: any;
  MainKeyValue: any='';
  prevHeight: any;
  interval: any;
  position: any;
  div2: any;
  contentID: any;
  contentIDs: any;
  Q1:number=0;
  Q2:number=0;
  Q3a:number=0;
  Q3b:number=0;
  Q4:number=0;
  Q5:number=0;
  Q6:number=0;
  Q7:number=0;
  Q8:number=0;
  Q9:number=0;
  Q10:number=0;
  sum:number=0
  riskRangeLabel: any;
  isRiskRange: number;
  riskScore: any;
  suggestionTag1: any;
  suggestionTag2: any;
  viewResultbutton: boolean;
  showDrop: boolean;
  GPDataResults=Array()
  testID: any;
  resultDataJSON: any;
  greenSnack: boolean
  constructor( public _formBuilder: FormBuilder , private _snackBar: MatSnackBar,public contenItem: SettingsService) { }
 
  ngOnInit(): void {
    let url = window.location.search
    if(url && url.split && url.split("EventKey=")){
      let KeyEvents = url.split('EventKey=')
      let keys = KeyEvents[1]
      if(keys){
        let keys2 = keys.split('&').length
        let keys3;
        if(keys2 > 1){
          keys3 = keys.split('&')[0]
        }else{
          keys3 = keys
        }
        this.MainKeyValue= keys3
      }
    }
    setTimeout(() => {
      var elements = document.getElementsByClassName("RiskTestClass");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click',()=>{
          jQuery("#exampleModal12345").modal('show')
        });
      }
    }, 100);
    this.div2 = <HTMLElement>document.querySelector(".dsa-body-content")!;
    let clcikc= document.getElementsByClassName('risktestMain')! as HTMLCollectionOf<HTMLElement>
    for(let i =0; i<=clcikc.length-1;i++){
       clcikc[i].onclick = function(e) {
         if(e.target !=  document.getElementsByClassName('dropdown')[0]) {
             const elmd = document.getElementsByClassName('dropdownMenuBtn')!as HTMLCollectionOf<HTMLElement>;
             let nextsb= elmd[elmd.length-1];
            
             if(nextsb){
              nextsb.style.display='none'
             }
         }
       }
     }
    
    this.firstFormGroup = this._formBuilder.group({
      gender: ['', Validators.required],
      age: ['',Validators.required],
      pagination:['0']
    });
    this.secondFormGroup = this._formBuilder.group({
      aboriginal: ['',Validators.required],
      bornOptions: ['',Validators.required],
      pagination:['1']
    });
    this.thirdFormGroup = this._formBuilder.group({
      typeDiabetes: ['',Validators.required],
      highBP: ['',Validators.required],
      pagination:['2']
    });
    this.fourthFormGroup = this._formBuilder.group({
      tobacco: ['',Validators.required],
      hBP: ['',Validators.required],
      pagination:['3']
    });
    this.fifthFormGroup = this._formBuilder.group({
      vegetable: ['',Validators.required],
      exercise: ['',Validators.required],
      pagination:['4']
    });
    this.sixthFormGroup = this._formBuilder.group({
      waist: ['',Validators.required],
      pagination:['5']
    });
    this.finalFormGroup = this._formBuilder.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
      phone: ['',Validators.required],
      pagination:['6'],
      termsCondition: ['',Validators.required],
      gpResult: [''],
      sendEmail: ['']
    });
    
    this.firstFormGroup?.valueChanges.subscribe(value=>{
      if(this.firstFormGroup.status == 'VALID'){
        let butn = document.getElementsByClassName('stepeNext')
         butn[0].children[0].removeAttribute('disabled')
         butn[0].children[1].removeAttribute('disabled')
      }
    })
    this.secondFormGroup?.valueChanges.subscribe(value=>{
      if(this.secondFormGroup.status == 'VALID'){
        let butn = document.getElementsByClassName('stepeNext')
        butn[1].children[0].removeAttribute('disabled')
        butn[1].children[1].removeAttribute('disabled')
      }
    })
    this.thirdFormGroup?.valueChanges.subscribe(value=>{
      if(this.thirdFormGroup.status == 'VALID'){
        let butn = document.getElementsByClassName('stepeNext')
        butn[2].children[0].removeAttribute('disabled')
        butn[2].children[1].removeAttribute('disabled')
      }
    })
    this.fourthFormGroup?.valueChanges.subscribe(value=>{
      if(this.fourthFormGroup.status == 'VALID'){
        let butn = document.getElementsByClassName('stepeNext')
        butn[3].children[0].removeAttribute('disabled')
        butn[3].children[1].removeAttribute('disabled')
      }
    })
    this.fifthFormGroup?.valueChanges.subscribe(value=>{
      if(this.fifthFormGroup.status == 'VALID'){
        let butn = document.getElementsByClassName('stepeNext')
        butn[4].children[0].removeAttribute('disabled')
        butn[4].children[1].removeAttribute('disabled')
      }
    })
    this.sixthFormGroup?.valueChanges.subscribe(value=>{
      if(this.sixthFormGroup.status == 'VALID'){
        let butn = document.getElementsByClassName('stepeNext')
        butn[5].children[0].removeAttribute('disabled')
        butn[5].children[1].removeAttribute('disabled')
      }
    })
    
  }

 
  finish(){
   
    let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[6])
    buttons.click()
   
  }
  do(event) {
		event.preventDefault();
	}
  showResultdata(){
    if(this.finalFormGroup.status == 'VALID'){
      this.testID= uuid()
      this.viewResultData=true;
      const elm = document.querySelector<HTMLElement>('.dsa-body-content')!;
     
      const elemp = <HTMLElement>elm.parentElement;
    
       elemp.style.height = '1000px';
      this.sum = this.sum+Number(this.Q1)+Number(this.Q2)+Number(this.Q3a)+Number(this.Q3b)+Number(this.Q4)+Number(this.Q5)+Number(this.Q6)+Number(this.Q7)+Number(this.Q8)+Number(this.Q9)+Number(this.Q10)
    
      this.riskScore= this.sum
      if( this.sum <= 5 && this.sum >= 0){
      
        this.riskRangeLabel = "Low Risk"
        this.isRiskRange = 0
      }else if(this.sum >= 6 && this.sum <= 11){
      
        this.riskRangeLabel = "Intermediate Risk"
        this.isRiskRange = 1
        this.suggestionTag1 ="Discuss your score with your doctor as you are at risk of developing type 2 diabetes."
        this.suggestionTag2 = "Improving your lifestyle through healthy eating and regular physical activity can reduce your risk, or delay the onset of type 2 diabetes."
      }else if(this.sum >= 12){
      
        this.riskRangeLabel = "High Risk"
        this.isRiskRange = 2
        this.suggestionTag1= "You may have undiagnosed type 2 diabetes or be at a high risk of developing the condition."
        this.suggestionTag2 ="See your doctor about having a blood test. Act now to prevent type 2 diabetes."
      }
      this.viewResultbutton = true;
      let resultrange
      if(this.sum<=5){
        resultrange	=	'0 - 5';
      }else if(this.sum>5&&this.sum<=8){
         resultrange	=	'6 - 8';
      }else if(this.sum>8&&this.sum<=11){
        resultrange	=	'9 - 11';
      }else if(this.sum>11&&this.sum<=15){
        resultrange	=	'12 - 15';
      }else if(this.sum>15&&this.sum<=19){
        resultrange	=	'16 - 19';
      }else if(this.sum>19){
        resultrange	=	'20+';
      }
      this.resultDataJSON =String.raw`{"q1":"{\"value\":\"`+this.firstFormGroup.get('gender')?.value+String.raw`\",\"score\":`+this.Q1+String.raw`}","q2":"{\"value\":\"`+this.firstFormGroup.get(`age`)?.value+String.raw`\",\"score\":`+this.Q2+String.raw`}","q3":"{\"value\":\"`+this.secondFormGroup.get(`aboriginal`)?.value+String.raw`\",\"score\":`+this.Q3a+String.raw`}","q3b":"{\"value\":\"`+this.secondFormGroup.get(`bornOptions`)?.value+String.raw`\",\"score\":`+this.Q3b+String.raw`}","q4":"{\"value\":\"`+this.thirdFormGroup.get(`typeDiabetes`)?.value+String.raw`\",\"score\":`+this.Q4+String.raw`}","q5":"{\"value\":\"`+this.thirdFormGroup.get(`highBP`)?.value+String.raw`\",\"score\":`+this.Q5+String.raw`}","q6":"{\"value\":\"`+this.fourthFormGroup.get(`hBP`)?.value+String.raw`\",\"score\":`+this.Q6+String.raw`}","q7":"{\"value\":\"`+this.fourthFormGroup.get(`tobacco`)?.value+String.raw`\",\"score\":`+this.Q7+String.raw`}","q8":"{\"value\":\"`+this.fifthFormGroup.get(`vegetable`)?.value+String.raw`\",\"score\":`+this.Q8+String.raw`}","q9":"{\"value\":\"`+this.fifthFormGroup.get(`exercise`)?.value+String.raw`\",\"score\":`+this.Q9+String.raw`}","q10":"{\"value\":\"`+this.sixthFormGroup.get(`waist`)?.value+String.raw`\",\"score\":`+this.Q10+String.raw`}","sendemail":"{\"value\":\"yes\",\"score\":0}","mobile":"{\"value\":\"`+this.finalFormGroup.get(`phone`)?.value+String.raw`\",\"score\":0}","firstname":"{\"value\":\"`+this.finalFormGroup.get(`fName`)?.value+String.raw`\",\"score\":0}","lastname":"{\"value\":\"`+this.finalFormGroup.get(`lName`)?.value+String.raw`\",\"score\":0}","email":"{\"value\":\"`+this.finalFormGroup.get(`email`)?.value+String.raw`\",\"score\":0}","totalscore":"{\"value\":`+this.sum+String.raw`}","resultrange":"{\"value\":\"`+resultrange+String.raw`\"}","TestID":"{\"value\":\"`+this.testID+String.raw`\"}","Type":"{\"value\":\"AusRiskTest\"}","EventKey":"{\"value\":\"`+this.MainKeyValue+String.raw`\"}"}`
      this.contenItem.postGPdata(this.resultDataJSON,'FaceTheFacts').subscribe(resp=>{
       
      })
    }else{
      this.finalFormGroup.markAllAsTouched()
      return;
    }
  }
  radioClick(event){
    if(event.target.previousSibling){
      event.target.previousSibling.click()
    }
  }
  QA1(event){
    this.Q1 = event.target.dataset.score
  }
  QA2(event){
    this.Q2 = event.target.dataset.score
  }
  QA3a(event){
    this.Q3a = event.target.dataset.score
  }
  QA3b(event){
    this.Q3b = event.target.dataset.score
  }
  QA4(event){
    this.Q4 = event.target.dataset.score
  }
  QA5(event){
    this.Q5 = event.target.dataset.score
  }
  QA6(event){
    this.Q6 = event.target.dataset.score
  }
  QA7(event){
    this.Q7 = event.target.dataset.score
  }
  QA8(event){
    this.Q8 = event.target.dataset.score
  }
  QA9(event){
    this.Q9 = event.target.dataset.score
  }
  QA10(event){
    this.Q10 = event.target.dataset.score
  }

  getsupport(event){
    this.contenItem.getSupportRef(event,this.testID)
  }
  
  gpResutl(showDrop){
    this.showDrop =!showDrop
  }
  getsupportData(event){
    this.contenItem.getGIData('$/DSA/FTF/GP List',event.target.value).subscribe(resp=>{
      this.GPDataResults=[]
      let sendEmail: any;
      let descp: any;
      resp.forEach(ele=>{
        sendEmail= ele.Properties.$values[1].Value
        descp= ele.Properties.$values[2].Value
        this.GPDataResults.push({descp,sendEmail})
      })
      const elmd = document.getElementsByClassName('dropdownMenuBtn')!as HTMLCollectionOf<HTMLElement>;
      let nextsb= elmd[elmd.length-1];
      if(nextsb){
        nextsb.style.display='block'
      }
    }) 
  }
  setValueGP(i){
    this.GPDataResults[i].descp
    this.finalFormGroup.get('gpResult')?.setValue(this.GPDataResults[i].descp)
    this.finalFormGroup.get('sendEmail')?.setValue(this.GPDataResults[i].sendEmail)
  }
  sentToGP(){
    if(this.finalFormGroup.get('sendEmail')?.value){
      this.greenSnack= true;
      let jsondata= String.raw`{"TestId":"{\"value\":\"`+this.testID+String.raw`\"}","GPEmail":"{\"value\":\"`+this.finalFormGroup.get('sendEmail')?.value+String.raw`\"}","Type":"{\"value\":\"SendToGP\"}"}`
      this.contenItem.postGPdata(jsondata,'FaceTheFactsGP').subscribe(resp=>{
      })
      setTimeout(() => {
        this.greenSnack= false
      }, 5000);
      this.finalFormGroup.get('sendEmail')?.reset()
      this.gpResutl(this.showDrop)
    }
  }
  stepperPrev(event){
    event.target.parentElement.nextElementSibling.click();
  }
  stepperNext(event){
    event.target.parentElement.previousElementSibling.click()
  }
  becomeMember(){
    window.open('https://www.diabetessa.com.au/Web/Get_Involved/Membership/Become_a_Member/Web/Get_Involved/Membership/Become_a_Member.aspx')
  }
  restStepper(){
    if(document.getElementById('setpRestID')){
      document.getElementById('setpRestID')?.click()
    }
    this.Q1=0;
    this.Q2=0;
    this.Q3a=0;
    this.Q3b=0;
    this.Q4=0;
    this.Q5=0;
    this.Q6=0;
    this.Q7=0;
    this.Q8=0;
    this.Q9=0;
    this.Q10=0;
    this.sum=0

    this.finalFormGroup.reset();
    this.finalFormGroup.markAsUntouched()
    this.viewResultData=false;
    this.viewResultbutton=false;
    this.showDrop=false;
    let butn = document.getElementsByClassName('stepeNext')
    for(let i =0 ; i <=butn.length-1; i++){
      butn[i].children[0].setAttribute('disabled', 'disabled')
      butn[i].children[1].setAttribute('disabled', 'disabled')
    }
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
}

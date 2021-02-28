import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ContentObserver } from '@angular/cdk/observers';
import { ThrowStmt } from '@angular/compiler';
import { SettingsService } from 'src/app/service/settings.service';
import { ContentKeysService } from 'src/app/service/content-keys.service';
import { Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
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
  // @Input() counts
  
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
  constructor( public _formBuilder: FormBuilder,public contenItem: SettingsService) { 
 
    // console.log("contentItem >>>>>>>>>>>>>",this.contenItem.contentItemKey[this.contenItem.contentItemKey.length-1])
   
   

    // this.contentID = this.contentIDs.map[1].value[0]
    // console.log("contentItem 1 >>>>>>>>>>>>>",this.contentID.map[1].value[0])
    // console.log("contentItem 2 >>>>>>>>>>>>>",this.contentID.map)


  }
   doStuff() {
    let heigtht = document.getElementsByClassName('exampleModal1234') as HTMLCollectionOf<HTMLElement>
    this.newHeight = heigtht[heigtht.length-1].clientHeight
    if(this.newHeight == this.prevHeight){
      heigtht[heigtht.length-1].style.position='absolute'
       heigtht[heigtht.length-1].style.top = -this.newHeight-116 + "px";
       const elm = document.querySelector<HTMLElement>('.dsa-body-content')!;
       // console.log(elm.parentElement)
       const elemp = <HTMLElement>elm.parentElement;
       // console.log(elemp.style.minHeight)
      elemp.style.height =  heigtht[heigtht.length-1].clientHeight+"px"
      this.div2.style.minHeight =  heigtht[heigtht.length-1].clientHeight+"px"
    }else{
//        console.log("else",this.newHeight)
// console.log(-this.newHeight-116)      
         heigtht[heigtht.length-1].style.position='absolute'
       heigtht[heigtht.length-1].style.top = -this.newHeight-116 + "px";
       const elm = document.querySelector<HTMLElement>('.dsa-body-content')!;
       // console.log(elm.parentElement)
       const elemp = <HTMLElement>elm.parentElement;
       // console.log(elemp.style.minHeight)
      elemp.style.height =  heigtht[heigtht.length-1].clientHeight+"px"
      this.div2.style.minHeight =  heigtht[heigtht.length-1].clientHeight+"px"
      this.prevHeight = this.newHeight
      
    }
    // clearInterval(this.interval);
  }
 
  ngOnInit(): void {
    let test =document.querySelectorAll(".RiskTestClass")
    setTimeout(() => {
      var elements = document.getElementsByClassName("RiskTestClass");

       

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',()=>{
              console.log("hello >>>>>>> testing")
            const elmd = document.querySelectorAll<HTMLElement>('.exampleModal1234')!;
           
            if(elmd && elmd[elmd.length - 1] ){
              
              elmd[elmd.length-1].style.display ='block';
            }else{
              
            }

              const elm = document.querySelector<HTMLElement>('.dsa-body-content')!;
              // console.log(elm.parentElement)
              const elemp = <HTMLElement>elm.parentElement;
              this.interval = setInterval(()=>{
                this.doStuff()}, 50); // 2000 ms = start after 2sec 
              elm.style.display = 'none';
              jQuery("#exampleModal1234").modal('show')
            } );
        }
      }, 100);
      
      // this.contentID = this.counts
      // console.log("contentID >>>>>>>>>>>>>  ",this.contentID)
     
      // const div1 = document.querySelector("#hd")!;
       this.div2 = <HTMLElement>document.querySelector(".dsa-body-content")!;
      
      
     
       let clcikc= document.getElementsByClassName('risktestMain')! as HTMLCollectionOf<HTMLElement>
       console.log(clcikc.length)
       for(let i =clcikc.length-1; i<=clcikc.length-1;i++){
         console.log("clasdf")
       clcikc[i].onclick = function(e) {
         if(e.target !=  document.getElementsByClassName('dropdown')[document.getElementsByClassName('dropdown').length -1]) {
             console.log('You clicked outside');
             const elmd = document.getElementsByClassName('dropdownMenuBtn')!as HTMLCollectionOf<HTMLElement>;
           
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
      email: ['',Validators.required],
      phone: ['',Validators.required],
      pagination:['6'],
      termsCondition: ['',Validators.required],
      gpResult: [''],
      sendEmail: ['']
    });
    

    
    this.firstFormGroup?.valueChanges.subscribe(value=>{
      console.log(this.firstFormGroup)
      if(this.firstFormGroup.status == 'VALID'){
        console.log(this.firstFormGroup)
        let elements = document.getElementsByClassName('disable-click')as HTMLCollectionOf<HTMLElement>;
        
       
          var status=jQuery('.disable-click')[elements.length-1].checked;
          if(status == false){
           
            elements[elements.length-1].removeAttribute('disabled')
            elements[elements.length-1].click()
            elements[elements.length-1].setAttribute('disabled', 'disabled');
          }
        // }
        
        
          let butn = document.getElementsByClassName('stepeNext')
         
         butn[butn.length-6].children[0].removeAttribute('disabled')
      }
    })
    this.secondFormGroup?.valueChanges.subscribe(value=>{
      if(this.secondFormGroup.status == 'VALID'){
       
        let elements = document.getElementsByClassName('disable-click1')as HTMLCollectionOf<HTMLElement>;
    

        for(let i =elements.length-2 ; i <=elements.length-1; i++){
          var status=jQuery('.disable-click1')[i].checked;
          if(status == false){
           
            elements[i].removeAttribute('disabled')
            elements[i].click()
            elements[i].setAttribute('disabled', 'disabled');
          }
        }
        
        
          let butn = document.getElementsByClassName('stepeNext')
        butn[butn.length-5].children[0].removeAttribute('disabled')
      }
    })
    this.thirdFormGroup?.valueChanges.subscribe(value=>{
      if(this.thirdFormGroup.status == 'VALID'){
       
        let elements = document.getElementsByClassName('disable-click2')as HTMLCollectionOf<HTMLElement>;
       
        for(let i =elements.length-5 ; i <=elements.length -3; i++){
          var status=jQuery('.disable-click2')[i].checked;
          if(status == false){
           
            elements[i].removeAttribute('disabled')
            elements[i].click()
            elements[i].setAttribute('disabled', 'disabled');
          }
        }
        
        
          let butn = document.getElementsByClassName('stepeNext')
        butn[butn.length-4].children[0].removeAttribute('disabled')
      }
    })
    this.fourthFormGroup?.valueChanges.subscribe(value=>{
      if(this.fourthFormGroup.status == 'VALID'){
      
        let elements = document.getElementsByClassName('disable-click3')as HTMLCollectionOf<HTMLElement>;
       
        for(let i =elements.length-4 ; i <=elements.length-1; i++){
          var status=jQuery('.disable-click3')[i].checked;
          if(status == false){
           
            elements[i].removeAttribute('disabled')
            elements[i].click()
            elements[i].setAttribute('disabled', 'disabled');
          }
        }
        
        
          let butn = document.getElementsByClassName('stepeNext')
        butn[butn.length-3].children[0].removeAttribute('disabled')
      }
    })
    this.fifthFormGroup?.valueChanges.subscribe(value=>{
      if(this.fifthFormGroup.status == 'VALID'){
       
        let elements = document.getElementsByClassName('disable-click4')as HTMLCollectionOf<HTMLElement>;
       
        for(let i =elements.length-5 ; i <=elements.length-1; i++){
          var status=jQuery('.disable-click4')[i].checked;
          if(status == false){
           
            elements[i].removeAttribute('disabled')
            elements[i].click()
            elements[i].setAttribute('disabled', 'disabled');
          }
        }
        
        
          let butn = document.getElementsByClassName('stepeNext')
        butn[butn.length-2].children[0].removeAttribute('disabled')
      }
    })
    this.sixthFormGroup?.valueChanges.subscribe(value=>{
      if(this.sixthFormGroup.status == 'VALID'){
       
        let elements = document.getElementsByClassName('disable-click5')as HTMLCollectionOf<HTMLElement>;
       
        for(let i =elements.length-6 ; i <=elements.length-1; i++){
          var status=jQuery('.disable-click5')[i].checked;
          if(status == false){
           
            elements[i].removeAttribute('disabled')
            elements[i].click()
            elements[i].setAttribute('disabled', 'disabled');
          }
        }
        
        
          let butn = document.getElementsByClassName('stepeNext')
        butn[butn.length-1].children[0].removeAttribute('disabled')
      }
    })
    
    console.log(this.firstFormGroup)
  
  }

  finish(){
    console.log("finish")
    let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[6])
    buttons.click()
    // this.resultStatus=true;
  }
  showResultdata(){

    if(this.finalFormGroup.status == 'VALID'){
      this.testID= uuid()
      this.viewResultData=true;
      const elm = document.querySelector<HTMLElement>('.dsa-body-content')!;
      console.log(elm.parentElement)
      const elemp = <HTMLElement>elm.parentElement;
      console.log(elemp.style.minHeight)
       elemp.style.height = '1000px';
      this.sum = this.sum+Number(this.Q1)+Number(this.Q2)+Number(this.Q3a)+Number(this.Q3b)+Number(this.Q4)+Number(this.Q5)+Number(this.Q6)+Number(this.Q7)+Number(this.Q8)+Number(this.Q9)+Number(this.Q10)
      console.log(this.sum)
      this.riskScore= this.sum
      if( this.sum <= 5 && this.sum >= 0){
        console.log("Your Result Range  0-5 >>>>>>>>> ")
        this.riskRangeLabel = "Low Risk"
        this.isRiskRange = 0
       
       
      }else if(this.sum >= 6 && this.sum <= 11){
        console.log("Your Result Range  6-11 >>>>>>>>> ")
        this.riskRangeLabel = "Intermediate Risk"
        this.isRiskRange = 1
        
          this.suggestionTag1 ="Discuss your score with your doctor as you are at risk of developing type 2 diabetes."
          this.suggestionTag2 = "Improving your lifestyle through healthy eating and regular physical activity can reduce your risk, or delay the onset of type 2 diabetes."
       
       
       
      }else if(this.sum >= 12){
        console.log("Your Result Range  12 >>>>>>>>> ")
        this.riskRangeLabel = "High Risk"
        this.isRiskRange = 2
        this.suggestionTag1= "You may have undiagnosed type 2 diabetes or be at a high risk of developing the condition."
        this.suggestionTag2 ="See your doctor about having a fasting blood glucose test. Act now to prevent type 2 diabetes."
       
      }
      this.viewResultbutton = true;
      let resultrange
      if(this.sum<=5){
        // resultcls	=	'.lowrisk';
        // resultblock	=	'.resultblock.risk1';
        resultrange	=	'0 - 5';
        // resultdesc	=	'Low Risk';
      }
      else if(this.sum>5&&this.sum<=8){
        // resultcls	=	'.intermediaterisk1';
        // resultblock	=	'.resultblock.risk1';
        resultrange	=	'6 - 8';
        // resultdesc	=	'Low Risk';
      }
      else if(this.sum>8&&this.sum<=11){
        // resultcls	=	'.intermediaterisk2';
        // resultblock	=	'.resultblock.risk3';
        resultrange	=	'9 - 11';
        // resultdesc	=	'Medium Risk';
      }
      else if(this.sum>11&&this.sum<=15){
        // resultcls	=	'.highrisk1';
        // resultblock	=	'.resultblock.risk5';
        resultrange	=	'12 - 15';
        // resultdesc	=	'High Risk';
      }
      else if(this.sum>15&&this.sum<=19){
        // resultcls	=	'.highrisk2';
        // resultblock	=	'.resultblock.risk5';
        resultrange	=	'16 - 19';
        // resultdesc	=	'High Risk';
      }
      else if(this.sum>19){
        // resultcls	=	'.highrisk3';
        // resultblock	=	'.resultblock.risk5';
        resultrange	=	'20+';
        // resultdesc	=	'High Risk';
      }

      this.resultDataJSON ={
        "q1":{"value":this.firstFormGroup.get('gender')?.value,"score":this.Q1},
        "q2":{"value":this.firstFormGroup.get('age')?.value,"score":this.Q2},
        "q3":{"value":this.secondFormGroup.get('aboriginal')?.value,"score":this.Q3a},
        "q3b":{"value":this.secondFormGroup.get('bornOptions')?.value,"score":this.Q3b},
        "q4":{"value":this.thirdFormGroup.get('typeDiabetes')?.value,"score":this.Q4},
        "q5":{"value":this.thirdFormGroup.get('highBP')?.value,"score":this.Q5},
        "q6":{"value":this.fourthFormGroup.get('hBP')?.value,"score":this.Q6},
        "q7":{"value":this.fourthFormGroup.get('tobacco')?.value,"score":this.Q7},
        "q8":{"value":this.fifthFormGroup.get('vegetable')?.value,"score":this.Q8},
        "q9":{"value":this.fifthFormGroup.get('exercise')?.value,"score":this.Q9},
        "q10":{"value":this.sixthFormGroup.get('waist')?.value,"score":this.Q10},
        "sendemail":{"value":this.finalFormGroup.get('sendEmail')?.value,"score":0},
        "firstname":{"value":this.finalFormGroup.get('fName')?.value,"score":0},
        "lastname":{"value":this.finalFormGroup.get('lName')?.value,"score":0},
        "mobile":{"value":this.finalFormGroup.get('phone')?.value,"score":0},
        "email":{"value":this.finalFormGroup.get('email')?.value,"score":0},
        "totalscore":{"value":this.sum },
        "resultrange":{"value": resultrange},
        "TestID":{"value": this.testID}
      }
      console.log(this.resultDataJSON)
      this.contenItem.postGPdata(this.resultDataJSON,'FaceTheFacts').subscribe(resp=>{
        console.log(resp)
        if(resp){
          console.log("success")
        }
      })
      // setTimeout(() => {
      //   // this.Q1 = 0;
      //   // this.Q2 = 0;
      //   // this.Q3a = 0;
      //   // this.Q3b = 0;
      //   // this.Q4 = 0;
      //   // this.Q5 = 0;
      //   // this.Q6 = 0;
      //   // this.Q7 = 0;
      //   // this.Q8 = 0;
      //   // this.Q9 = 0;
      //   // this.Q9 = 0;
      //   // this.Q10 = 0;

      // }, 20);
    }else{
      console.log("Form valid >>>>>>>",this.finalFormGroup)
      return;
     
    }
    

  }
  hello(){
    console.log("hello check ")
  }
 
   
  radioClick(event){
    console.log(event)
    if(event.target.previousSibling){
      event.target.previousSibling.click()
    }
  }
 
  viewResult(){
    console.log(this.finalFormGroup.status)
    
   
    
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
    this.Q2 = event.target.dataset.score
   
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
    if(event == 0){
      
      window.open("https://www.imisconsulting.com.au/imis0/Facts/poc?TestID="+this.testID)
    }else{
      window.open("https://www.imisconsulting.com.au/iMIS0/Info/GetSupport")
    }
    
  
  }
  
  gpResutl(showDrop){
    this.showDrop =!showDrop
    

  }
  getsupportData(event){
    console.log(event.target.value)
    this.contenItem.getGIData('$/DSA/FTF/GP List',event.target.value).subscribe(resp=>{
      console.log(resp)
      this.GPDataResults=[]
      let sendEmail: any;
      let descp: any;
      resp.forEach(ele=>{
        console.log(ele.Properties.$values[2].Value)
        sendEmail= ele.Properties.$values[1].Value
        descp= ele.Properties.$values[2].Value
        this.GPDataResults.push({descp,sendEmail})
      })
      console.log(this.GPDataResults)
       
        const elmd = document.getElementsByClassName('dropdownMenuBtn')!as HTMLCollectionOf<HTMLElement>;
           
           let nextsb= elmd[elmd.length-1];
           console.log(nextsb)
           if(nextsb){
            nextsb.style.display='block'
           }
          
             
        
       
    }) 

  }
  setValueGP(i){
    console.log(this.GPDataResults[i])
    this.GPDataResults[i].descp
    this.finalFormGroup.get('gpResult')?.setValue(this.GPDataResults[i].descp)
    this.finalFormGroup.get('sendEmail')?.setValue(this.GPDataResults[i].sendEmail)
  }
  sentToGP(){
    
    let jsondata= {
      'TestId': this.testID,
      'GPEmail': this.finalFormGroup.get('sendEmail')?.value
    }
    console.log(jsondata)
    this.contenItem.postGPdata(jsondata,'FaceTheFactsGP').subscribe(resp=>{
      console.log(resp)
      if(resp){
        console.log("success")
      }
    })
  }

}

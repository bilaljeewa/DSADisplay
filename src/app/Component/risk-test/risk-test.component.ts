import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ContentObserver } from '@angular/cdk/observers';
import { ThrowStmt } from '@angular/compiler';
import { SettingsService } from 'src/app/service/settings.service';
import { ContentKeysService } from 'src/app/service/content-keys.service';
import { Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
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
      
      
      
     
      
      
    
  
  
    this.firstFormGroup = this._formBuilder.group({
      gender: ['', Validators.required],
      age:[''],
      pagination:['0']
    });
    this.secondFormGroup = this._formBuilder.group({
      aboriginal: [''],
      bornOptions: [''],
      pagination:['1']
    });
    this.thirdFormGroup = this._formBuilder.group({
      typeDiabetes: [''],
      highBP: [''],
      pagination:['2']
    });
    this.fourthFormGroup = this._formBuilder.group({
      tobacco: [''],
      hBP: [''],
      pagination:['3']
    });
    this.fifthFormGroup = this._formBuilder.group({
      vegetable: [''],
      exercise: [''],
      pagination:['4']
    });
    this.sixthFormGroup = this._formBuilder.group({
      waist: [''],
      pagination:['5']
    });
    this.sixthFormGroup = this._formBuilder.group({
      waist: [''],
      pagination:['5']
    });
    this.finalFormGroup = this._formBuilder.group({
      waist: [''],
      fName: [''],
      lName: [''],
      email: [''],
      phone: [''],
      pagination:['6'],
      termsCondition: ['',Validators.required]
    });
    

    this.firstFormGroup.get('pagination')?.valueChanges.subscribe(value=>{
      console.log()
      if(value){
       
        
        let buttons = document.getElementsByClassName('mat-step-icon')! as HTMLCollectionOf<HTMLElement>
        //  console.log("1 >>>>>>>>>>>>>",buttons)
        
        // console.log(buttons)
        if(buttons){
         
          if( buttons[(buttons.length-7)+value]){
           
            buttons[(buttons.length-7)+Number(value)].click()
          }
         
          
        }
        
        if(value == 1){
          this.secondFormGroup.get('pagination')?.setValue('1')  
        }else if(value == 2){
          this.thirdFormGroup.get('pagination')?.setValue('2')
        }else if(value == 3){
          this.fourthFormGroup.get('pagination')?.setValue('3')
        }else if(value == 4){
          this.fifthFormGroup.get('pagination')?.setValue('4')
        }else if(value == 5){
          this.sixthFormGroup.get('pagination')?.setValue('5')
        }
      }
    })
    this.secondFormGroup.get('pagination')?.valueChanges.subscribe(value=>{
      if(value){
        let buttons = document.getElementsByTagName('mat-step-header')as HTMLCollectionOf<HTMLElement>
        // console.log(buttons)
        buttons[(buttons.length-7)+Number(value)]!.click()
        if(value == 0){
          this.firstFormGroup.get('pagination')?.setValue('0')  
        }else if(value == 2){
          this.thirdFormGroup.get('pagination')?.setValue('2')
        }else if(value == 3){
          this.fourthFormGroup.get('pagination')?.setValue('3')
        }else if(value == 4){
          this.fifthFormGroup.get('pagination')?.setValue('4')
        }else if(value == 5){
          this.sixthFormGroup.get('pagination')?.setValue('5')
        }
      }
    })
    this.thirdFormGroup.get('pagination')?.valueChanges.subscribe(value=>{
      if(value){
        let buttons = document.getElementsByTagName('mat-step-header')as HTMLCollectionOf<HTMLElement>
        // console.log(buttons)
        buttons[(buttons.length-7)+Number(value)]!.click()
        if(value == 1){
          this.secondFormGroup.get('pagination')?.setValue('1')  
        }else if(value == 0){
          this.firstFormGroup.get('pagination')?.setValue('0')
        }else if(value == 3){
          this.fourthFormGroup.get('pagination')?.setValue('3')
        }else if(value == 4){
          this.fifthFormGroup.get('pagination')?.setValue('4')
        }else if(value == 5){
          this.sixthFormGroup.get('pagination')?.setValue('5')
        }
      }
    })
    this.fourthFormGroup.get('pagination')?.valueChanges.subscribe(value=>{
      if(value){
        let buttons = document.getElementsByTagName('mat-step-header')as HTMLCollectionOf<HTMLElement>
       
        buttons[(buttons.length-7)+Number(value)]!.click()
        if(value == 1){
          this.secondFormGroup.get('pagination')?.setValue('1')  
        }else if(value == 2){
          this.thirdFormGroup.get('pagination')?.setValue('2')
        }else if(value == 0){
          this.firstFormGroup.get('pagination')?.setValue('0')
        }else if(value == 4){
          this.fifthFormGroup.get('pagination')?.setValue('4')
        }else if(value == 5){
          this.sixthFormGroup.get('pagination')?.setValue('5')
        }
      }
    })
    this.fifthFormGroup.get('pagination')?.valueChanges.subscribe(value=>{
     
      if(value){
        let buttons = document.getElementsByTagName('mat-step-header')as HTMLCollectionOf<HTMLElement>
       
        buttons[(buttons.length-7)+Number(value)]!.click()
        if(value == 1){
          this.secondFormGroup.get('pagination')?.setValue('1')  
        }else if(value == 2){
          this.thirdFormGroup.get('pagination')?.setValue('2')
        }else if(value == 3){
          this.fourthFormGroup.get('pagination')?.setValue('3')
        }else if(value == 0){
          this.firstFormGroup.get('pagination')?.setValue('0')
        }else if(value == 5){
          this.sixthFormGroup.get('pagination')?.setValue('5')
        }
      }
    })
    this.sixthFormGroup.get('pagination')?.valueChanges.subscribe(value=>{
     
      if(value){
        let buttons = document.getElementsByTagName('mat-step-header')as HTMLCollectionOf<HTMLElement>
      
        buttons[(buttons.length-7)+Number(value)]!.click()
        if(value == 1){
          this.secondFormGroup.get('pagination')?.setValue('1')  
        }else if(value == 2){
          this.thirdFormGroup.get('pagination')?.setValue('2')
        }else if(value == 3){
          this.fourthFormGroup.get('pagination')?.setValue('3')
        }else if(value == 0){
          this.firstFormGroup.get('pagination')?.setValue('0')
        }else if(value == 4){
          this.fifthFormGroup.get('pagination')?.setValue('4')
        }
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
      setTimeout(() => {
        this.Q1 = 0;
        this.Q2 = 0;
        this.Q3a = 0;
        this.Q3b = 0;
        this.Q4 = 0;
        this.Q5 = 0;
        this.Q6 = 0;
        this.Q7 = 0;
        this.Q8 = 0;
        this.Q9 = 0;
        this.Q9 = 0;
        this.Q10 = 0;

      }, 20);
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
    console.log(this.Q1)
  }
  QA2(event){
    this.Q2 = event.target.dataset.score
    console.log(this.Q2)
  }
  QA3a(event){
  
    this.Q3a = event.target.dataset.score
    console.log(this.Q3a)
  }
  QA3b(event){
   
    this.Q3b = event.target.dataset.score
    console.log(this.Q3b)
  }
  QA4(event){
    this.Q2 = event.target.dataset.score
    console.log(this.Q2)
  }
  QA5(event){
    this.Q5 = event.target.dataset.score
    console.log(this.Q5)
  }
  QA6(event){
    this.Q6 = event.target.dataset.score
    console.log(this.Q6)
  }
  QA7(event){
    this.Q7 = event.target.dataset.score
    console.log(this.Q7)
  }
  QA8(event){
    this.Q8 = event.target.dataset.score
    console.log(this.Q8)
  }
  QA9(event){
    this.Q9 = event.target.dataset.score
    console.log(this.Q9)
  }
  QA10(event){
    this.Q10 = event.target.dataset.score
    console.log(this.Q10)
  }


}

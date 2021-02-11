import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
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
  constructor( public _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let test =document.querySelectorAll(".RiskTestClass")
    setTimeout(() => {
      var elements = document.getElementsByClassName("RiskTestClass");

        console.log(elements)

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',()=>{
              console.log("BUTOON CLICK",i)

              jQuery("#exampleModal1234").modal('show')
            } );
        }
      }, 100);
    
  
  
    this.firstFormGroup = this._formBuilder.group({
      gender: ['', Validators.required],
      age:[''],
      pagination:['0']
    });
    this.secondFormGroup = this._formBuilder.group({
      aboriginal: [''],
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
    

    this.firstFormGroup.get('pagination')?.valueChanges.subscribe(value=>{
      if(value){
        let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[value])
        buttons.click()
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
        let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[value])
        buttons.click()
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
        let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[value])
        buttons.click()
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
        let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[value])
        buttons.click()
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
      console.log(value)
      if(value){
        let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[value])
        buttons.click()
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
      console.log(value)
      if(value){
        let buttons = (<HTMLElement>document.getElementsByTagName('mat-step-header')[value])
        buttons.click()
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
    this.resultStatus=true;
  }

 
   



}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: any): any {
    if(value){
      value = value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Pipe({
  name: 'daysLeft'
})
export class DaysLeft implements PipeTransform {
  transform(value: any): any {
    let todayDate:any= new Date()
    let eDate:any = new Date(value)
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((todayDate - eDate) / oneDay));
    return diffDays ;
  }
}

@Pipe({
  name: 'ampm'
})
export class AmPM implements PipeTransform {
  
  transform(value: any): any {
   
		var time = new Date(value);
		let ampm =  time.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric', hour12: true })
	  
	return ampm
  }
}
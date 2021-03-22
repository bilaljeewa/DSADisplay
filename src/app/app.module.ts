import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe, DaysLeft, AmPM } from './pipe/common.pipe';
import { RiskTestComponent } from './Component/risk-test/risk-test.component';
import { EventDetailComponent } from './Component/event-detail/event-detail.component';
import { DateLocationComponent } from './Component/date-location/date-location.component';
import { EventSearchComponent } from './Component/event-search/event-search.component';
import { MaterialModule } from './material.module';
import { UpcomingEventComponent } from './Component/upcoming-event/upcoming-event.component';
import { ViewAllEventComponent } from './Component/view-all-event/view-all-event.component';
import { CheckInComponent } from './Component/check-in/check-in.component';
import { FooterComponent } from './Component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe,
    AmPM,
    DaysLeft,
    RiskTestComponent,
    EventDetailComponent,
    DateLocationComponent,
    EventSearchComponent,
    UpcomingEventComponent,
    ViewAllEventComponent,
    CheckInComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  constructor(private injector: Injector) {
    const appElement = createCustomElement(AppComponent, { injector });
    if (!customElements.get('app-root')){
      customElements.define('app-root', appElement);
    } 
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import{FormsModule}from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from'./shared/material/material.module'
import{WeatherService} from'./weather.service'
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule 
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule { }

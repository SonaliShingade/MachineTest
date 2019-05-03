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
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    AddStudentFormComponent
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
  entryComponents:[AddStudentFormComponent]
})
export class AppModule { }

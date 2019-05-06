import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import{WeatherService} from'../weather.service'
import {MatDialog ,MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  constructor(private service:WeatherService,public dialog: MatDialog) { }

  @ViewChild('table') table: MatTable<Element>;
  studentDetail:any=[
    {
      FullName:"sonali",
      EmailId:"sonali@gmail.com",
      MobileNumber:1434343543,
      Address:"hjhkjh",
      City:'pune',
      Gender:'Female',
      Dob:'1/4/96'
    },
      
  ];
  public temp;
  public weatherData;
  public location={
    city:'London',
    code:'uk'
  };
  displayedColumns: string[] = ['FullName', 'EmailId', 'MobileNumber', 'Address','City','Gender','DOB','Action'];
  dataSource = this.studentDetail;
  
  tempstudentDetail:any={};
  tempstudentDetail1:any={};

    addStudentDetail(){
      console.log(this.tempstudentDetail);
      this.studentDetail.push(this.tempstudentDetail);
      //console.log(this.studentDetail);
      this.table.dataSource = this.studentDetail;
      this.table.renderRows();
      this.tempstudentDetail={};
    }
    editStudentDetail(i){
      this.temp=i;
      console.log(i);
      this.tempstudentDetail1.FullName=this.studentDetail[i].FullName;
      this.tempstudentDetail1.EmailId=this.studentDetail[i].EmailId;
      this.tempstudentDetail1.MobileNumber=this.studentDetail[i].MobileNumber;
      this.tempstudentDetail1.Address=this.studentDetail[i].Address;
      this.tempstudentDetail1.City=this.studentDetail[i].City;
      console.log(this.tempstudentDetail1);
    }
    updateStudentDetail(){    
      let k=this.temp;
      //console.log(k);
      for(let i=0;i<this.studentDetail.length;i++){
        if(i==k){
        this.studentDetail[i]=this.tempstudentDetail1;
        this.table.renderRows();
        console.log(this.studentDetail[i]);
        this.tempstudentDetail1={};
      }
    }
    
    }
    deleteStudentDetail(i){
      //console.log(i)
      this.studentDetail.splice(i,1);
      this.table.renderRows();
    }
  ngOnInit() {
    this.weatherData=this.service.getWeather(this.location.city,this.location.code).subscribe(data=>{
      this.weatherData=data;
      console.log(this.weatherData);
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// Load module after Highcharts is loaded
// Create the chart
@Component({
  selector: 'app-url-data',
  templateUrl: './url-data.component.html',
  styleUrls: ['./url-data.component.css']
})
export class UrlDataComponent implements OnInit {
  url
  allData ;
  chartData=[]
  highcharts = Highcharts;
  chartOptions
 
  constructor( private http : HttpClient , private snackBar:MatSnackBar , private router : Router) { }
  displayedColumns: string[] = ['url', 'vues', 'action'];
  ngOnInit(): void {
    
this.http.get("https://testappurls.herokuapp.com/allUrls/"+localStorage.getItem("connectedUser")).subscribe((res : any)=>{
 
this.allData = res.AllUrls
this.allData.forEach(element => {
  this.chartData.push( {
    name: element.lien,
    y: element.vues,
    drilldown: element.lien
  })
});
this.chartOptions={
  chart: {
    type: 'column'
  },
  title: {
    text: 'visited urls statistics'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'number of views'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y}'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y} vues</b> <br/>'
  },

  series: [
    {
      name: "URL",
      colorByPoint: true,
      data: this.chartData
    }
  ],
  }
  })}

visitUrl( id , url){
this.http.post("https://testappurls.herokuapp.com/visteUrl",{id : id}).subscribe()
window.open(url, '_blank').focus();
this.ngOnInit()}
addUrl(){
  this.http.post("https://testappurls.herokuapp.com/addUrl",{url : this.url , connectedUser : localStorage.getItem('connectedUser')}).subscribe(()=>{
    this.snackBar.open('your url has been added','',{duration:1000} )
    this.ngOnInit()
  })
}
logout(){
  localStorage.clear();
  this.router.navigate(["/Login"])
}
}

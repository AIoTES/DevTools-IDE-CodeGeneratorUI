import { Component, OnInit } from '@angular/core';
import { environment} from '../../environments/environment'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-file-navigator',
  templateUrl: './file-navigator.component.html',
  styleUrls: ['./file-navigator.component.css']
})
export class FileNavigatorComponent implements OnInit {

  constructor(private http :HttpClient,private route: Router) { }
data
  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('Authorization'),
        responseType:'application/json'
      })
    };
    this.http.get<any>(environment.codegenerator_url,httpOptions).subscribe(data=>{
   this.data = data.content
    },error=>{
      console.log("error",error)      
    })
  }

}

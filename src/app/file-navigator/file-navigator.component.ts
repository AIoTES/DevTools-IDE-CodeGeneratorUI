import { Component, OnInit, ViewChild } from '@angular/core';
import { environment} from '../../environments/environment'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-file-navigator',
  templateUrl: './file-navigator.component.html',
  styleUrls: ['./file-navigator.component.css']
})
export class FileNavigatorComponent implements OnInit {

  constructor(private http :HttpClient,private route: Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
current_path=''
dataSource
is_file=false
file_content
last
link = environment.codegenerator_url
displayedColumns: string[] = ['var_name'];
 httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin":"*",
    responseType:'application/json'
  })
};
  ngOnInit(): void {
    console.log(window.location.href)

  this.getRequest(environment.codegenerator_url+"")
  }

  navigate(path:any){
    this.last = path
    this.current_path+="/"+path
    this.getRequest(environment.codegenerator_url+this.current_path)
  }

  getRequest(path:any){
    this.http.get<any>(path,this.httpOptions).subscribe(data=>{
      let root = data.root
      let h = []
      if(data.file_content){
        this.is_file = true
        this.file_content=data.file_content
      }else{
        this.is_file = false
        data.content.forEach(element => {
          let t = element.split(root)
          let y =t[1] 
          h.push(y.substr(1))
        });
        this.dataSource = new MatTableDataSource(h)
        this.dataSource.paginator = this.paginator;  

      }
     
    },error=>{
      console.log("error",error)      
    })
  }

  goback(){
    this.current_path =this.current_path.replace("/"+this.last,"")
    this.last = this.current_path
    this.getRequest(environment.codegenerator_url+this.current_path)
  }

}

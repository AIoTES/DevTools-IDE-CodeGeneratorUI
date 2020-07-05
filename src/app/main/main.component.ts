import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment} from '../../environments/environment'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ont_displayedColumns: string[] = ['ontology_url', 'recursive'];
  var_displayedColumns: string[] = ['var_name', 'var_value'];
  ont_datasource
  var_datasource
  ontology_datasource
  variables_datasource
  ont=''
  rec=''
  coordinator=''
  var_name=''
  var_value=''
  selected="false"
  recursive =['true','false']
  constructor(private http :HttpClient, private route: Router) { }

  ngOnInit(): void {
    console.log(environment)
    this.ontology_datasource=[]
    this.variables_datasource=[]
    this.ont_datasource = new MatTableDataSource(this.ontology_datasource)
    this.var_datasource = new MatTableDataSource(this.variables_datasource)
  }


  add_ontology(){
    this.ontology_datasource.push({ont_url:this.ont,recursive:this.selected})
    this.ont_datasource = new MatTableDataSource(this.ontology_datasource)
    this.ont=""
  }

  add_variable(){
    this.variables_datasource.push({var_name:this.var_name,var_value:this.var_value})
    this.var_datasource = new MatTableDataSource(this.variables_datasource)
    this.var_value=""
    this.var_name=""
  }

  delete_ontology(data:any){
    this.ontology_datasource.pop(data)
    this.ont_datasource = new MatTableDataSource(this.ontology_datasource)
  }

  delete_variable(data:any){
    this.variables_datasource.pop(data)
    this.var_datasource = new MatTableDataSource(this.variables_datasource)
    }

  post_data(){
    var post_body={
      template:"",
      ontologies:[],
      variables:{}
    }

    post_body.template=this.coordinator
    this.ontology_datasource.forEach(element => {
      post_body.ontologies.push({url:element.ont_url,recursive:element.recursive})
    });
    this.variables_datasource.forEach(element => {
      post_body.variables[element.var_name]=element.var_value
    });
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Credentials": "true",
        responseType:'application/json'
      })
    };
    this.http.post<any>(environment.codegenerator_url,post_body, httpOptions).subscribe(data=>{
      this.route.navigate(['FileNavigator'])
    },error=>{
      console.log("error",error)      
    })
  }
}


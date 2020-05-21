import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http :HttpClient ) { }

  ngOnInit(): void {
    this.ontology_datasource=[]
    this.variables_datasource=[]
    this.ont_datasource = new MatTableDataSource(this.ontology_datasource)
    this.var_datasource = new MatTableDataSource(this.variables_datasource)
  }


  add_ontology(){
    this.ontology_datasource.push({ont_url:this.ont,recursive:this.selected})
    this.ont_datasource = new MatTableDataSource(this.ontology_datasource)
  }

  add_variable(){
    this.variables_datasource.push({var_name:this.var_name,var_value:this.var_value})
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
    console.log(JSON.stringify(post_body))
    this.http.post("http://localhost:8181/GenerateCode",post_body).subscribe(data=>{
      window.location.replace("http://www.google.com")
    },error=>{
      console.log("error",error)      
    })
  }
}


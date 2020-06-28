import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
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
  aux_body={
    template: "https://gitlab.lst.tfo.upm.es/Activage-madrid-ds/code.generator/raw/master/codegenerator.core/src/test/resources/template-simple/simple.xml",
    ontologies: [
      {
        url: "https://protege.stanford.edu/ontologies/pizza/pizza.owl",
        recursive: "true"
      }
    ],
    variables: {
      varname: "varvalue"
    }
  }
  constructor(private http :HttpClient, private route: Router) { }

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
    this.http.post<any>(environment.codegenerator_url,this.aux_body).subscribe(data=>{
      this.route.navigate(['FileNavigator'])
    },error=>{
      console.log("error",error)      
    })
  }
}


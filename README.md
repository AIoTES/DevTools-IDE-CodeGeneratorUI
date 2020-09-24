# Code Generator

CodeGenerator ui tool is a frontend to use the CodeGeneator core tool as backend.


## Getting started

This UI is specifically designed to work with [Keycloak](https://www.keycloak.org/), so before start the installation process:
* check the realm installation section to add the configuration to ./assets/config.json
* Check environment.ts file and add the required information
  * codegenerator_url: URL pointing to CodeGenerator backend
  * baseUrl: URL base of this tool (default http://localhost:4200)
  * keycloakRealm: realm name in keycloak
  * keycloakBaseUrl: Base URL to access to keycloak




## Installing

first install the dependencies

```
npm install
```
second install the project

```
ng build
```

To build with docker

```
docker build -t codegenerator-frontend .
```

## Further Information

Please check out CodeGeneator tool wiki at [here](https://poliformat.upv.es/portal/site/ESP_0_2626/tool/4136ab45-e867-4287-ac8e-d5eed63f8307/ShowPage?returnView=&studentItemId=0&backPath=&errorMessage=&messageId=&clearAttr=&source=&title=&sendingPage=6007389&newTopLevel=false&postedComment=false&itemId=6007390&addBefore=&path=push&topicId=&addTool=-1&recheck=&id=&forumId=)

## Contributing

Pull requests are always appreciated. 
	
Any generated template can be hosted on the own git repository. This way the template can be referenced by public URLs in this tool. Currently there is not central database for templates.

## Credits

This software is manteined by: 
* Alejandro Medrano <amedrano@lst.tfo.upm.es> 
* Eduardo Bhuhid <ebuhid@lst.tfo.upm.es> 

## Licence

Code generator and all of its modules are released under [Apache Software Licence](http://www.apache.org/licenses/) version 2.0.
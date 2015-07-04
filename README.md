# grails-angular-duo

Simple but effective grails & angular combination that can be used as a template to create new applications easily :

## 1) Frontend

+ AngularJS 1.4.x [official site] (https://angularjs.org/) 
+ Restangular 1.5.x [official site] (https://github.com/mgonto/restangular)

### How to :

Tip : [nvm tool] (https://github.com/creationix/nvm) is an excellent way to install any Node version

```
npm install -g bower grunt-cli
npm install
bower install
```
execute locally 
```
grunt serve 
```
generate distribution
```
grunt build
```

## 2) Backend 

+ Grails 2.5.x : [official site] (https://grails.org/) | [REST documentation] (https://grails.github.io/grails-doc/latest/guide/webServices.html)
+ Yeoman Plugin 0.3 : [plugin repository] (https://grails.org/plugin/yeoman-frontend)

### How to :

Tip : [gvm tool] (http://gvmtool.net/) is an excellent way to install any Grails version

execute locally 
```
grails run-app
```
generate distribution
```
grails war
```

#### Workaround :

Due yeoman-plugin has a bug in 0.2 version, you can install locally the provisional 0.3 version in your workspace : 

```
mkdir yeoman-frontend-0.3
cd yeoman-frontend-0.3
git pull https://github.com/rmondejar/yeoman-frontend.git
grails package-plugin
grails maven-install
```

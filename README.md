# FrhWorkspace

this is a step to step to create a new Angular Library

## Generate a new WorkSpace

```bash
ng new frh-workspace --no-create-application
```

## Generate a new library

```bash
ng generate library frh-side-menu
```

## Generate scrips

Inside our root/package.json , we create the next scrips 

```JSON
scripts: {
    ... ,
    "frh-side-menu:build": "ng build frh-side-menu",
    "frh-side-menu:lint": "ng lint frh-side-menu",
    "frh-side-menu:test": "ng test frh-side-menu --no-watch --no-progress --browsers=ChromeHeadless",
    "frh-side-menu:publish": "npm run frh-side-menu:test && npm run frh-side-menu:build && npm publish dist/frh-side-menu"
}
```

## To check the functionality

in workspace root generate a new `TestBed` application

````bash
ng generate application frh-testbed-app
````
now to use that new project u need to use 

```bash
ng serve frh-testbed-app
```




## Useful commands
### App construction

```bash
ng build frh-side-menu --configuration development
```
> **Nota:** if you use this command (ng build frh-side-menu) it makes the build for production / use when u finish configuration


### To start Testing

```bash
ng test frh-side-menu
```

### To use linter

```bash
ng lint frh-side-menu
```
> **Nota:** if you need install / you need to press 2 times yes / and execute the command after install

## how to publish

```bash
ng build my-lib
cd dist/my-lib
npm publish
```
> **Nota:** in package.json inside SRC folder , we can change the version to publish and application name




## more soon
```
ng build my-lib
cd dist/my-lib
npm publish
```


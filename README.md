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
    "frh-side-menu:publish": "npm run frh-side-menu:test && npm run frh-side-menu:build && npm publish dist/frh-side-menu/"
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

in app.component.ts, we need to do the next import
```javascript
import { FrhSideMenuComponent } from 'frh-side-menu'
```

and add to imports
```javascript
  imports: [FrhSideMenuComponent],
```

now you can use the component in your local project

```html
<lib-frh-side-menu />
```
> **nota** if you make any change on your component, you need to rebuild de project to get the changes

## Global tailwind

for these special project we will need tailwind , and it will be a dependency of our component.
check `Global Tailwind Configuration` in commits

## start to manage your component
you can start to configure your component like a normal one

## to develop

if we want to check any change on the new component we need to use these 
```bash
ng build frh-side-menu --configuration development
```

to see the changes in the importation, and will need to use `ng serve -o` again

Now make any functionality you want.

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


---
***
___

## Publish in NPM

we need to have account in [https://www.npmjs.com/](https://www.npmjs.com/)

after it , signIn in npm in Terminal

```bash
npm login 
```
and verify 2fA in your browser
---
now we use our created script

```bash
npm run frh-side-menu:publish
```

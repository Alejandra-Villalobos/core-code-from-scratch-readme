<h1 align=center>Week 10</h1>

## Tuesday
### 1. Easter egg list in ReactJS
```javascript
import React from 'react';

export const EggList = ({eggs}) => {
  return(
  <ul>
      {eggs.map((item, key)=>{
    return <EasterEgg key={key} name={item} />
  })}
  </ul>
  )
};
```
___
## Wednesday
### Node.JS Core Understanding
1. What is Node.JS?
  Node.js is a Javascript environment that helps us build apps and see their changes while we are building them. It also has a lot of libraries available for developers   to use for free.
2. What problem does Node.JS solve?
  With Node.js we can run apps in a browser in buildtime, this helps identify errors and fix them quickly
3. What is the V8 Javascript Engine?
  V8 is the engine that compiles Javascript in Google Chrome. Node.js uses V8 to execute apps in real-time while coding.
4. Is Node.JS really necessary in the Development ecosystem?
  It is indispensable because it saves us of time and solves a lot of problems in development. Without Node.js building apps would be possible but more complicated.
5. What is the difference between Node.JS and any other browser?
  Node.js is more efficient in building apps in real-time, it provides flexibility while being lightweight 
6. What is NVM and Why is it useful for Node.JS developers?
  NVM is a version manager, it allows us to install and use any version of node via terminal. It's useful for developers because it can quickly change the version
  according to the project that is being working on.
  
### Node.JS Module System
1. What is a Javascript Module?
  A Javascript Module is basically a file with code that we can export to use in other parts of our project
2. Why are Javascript Modules necessary?
  It helps to have and organized and well structured project.
3. What module standards are available in Node.JS?
  Node.js includes Core Modules: http, url, querystring, path, fs and util
4. What are the differences between ESModules and CommonJS modules?
  ESModules was made for Javascript, while CommonJS is used in Node.js
5. Which types of modules exist in Node.JS?
  Core Modules: which are the ones already included in Node.
  Local Modules: The ones we can create and export/import
  Third Party Modules: These are installed when we use a node library 

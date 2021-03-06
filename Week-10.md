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
#### 1. What is Node.JS?
  Node.js is a Javascript environment that helps us build apps and see their changes while we are building them. It also has a lot of libraries available for 
  developers   to use for free.
#### 2. What problem does Node.JS solve?
  With Node.js we can run apps in a browser in buildtime, this helps identify errors and fix them quickly
#### 3. What is the V8 Javascript Engine?
  V8 is the engine that compiles Javascript in Google Chrome. Node.js uses V8 to execute apps in real-time while coding.
#### 4. Is Node.JS really necessary in the Development ecosystem?
  It is indispensable because it saves us of time and solves a lot of problems in development. Without Node.js building apps would be possible but more complicated.
#### 5. What is the difference between Node.JS and any other browser?
  Node.js is more efficient in building apps in real-time, it provides flexibility while being lightweight 
#### 6. What is NVM and Why is it useful for Node.JS developers?
  NVM is a version manager, it allows us to install and use any version of node via terminal. It's useful for developers because it can quickly change the version
  according to the project that is being working on.
  
### Node.JS Module System
#### 1. What is a Javascript Module?
  A Javascript Module is basically a file with code that we can export to use in other parts of our project
#### 2. Why are Javascript Modules necessary?
  It helps to have and organized and well structured project.
#### 3. What module standards are available in Node.JS?
  Node.js includes Core Modules: http, url, querystring, path, fs and util
#### 4. What are the differences between ESModules and CommonJS modules?
  ESModules was made for Javascript, while CommonJS is used in Node.js
#### 5. Which types of modules exist in Node.JS?
  Core Modules: which are the ones already included in Node.
  Local Modules: The ones we can create and export/import
  Third Party Modules: These are installed when we use a node library 
  
### Client-Server Model
#### 1. What is a Server?
  A server is a device (it can be a software or hardware) that provides a service when it is requested by a user.
#### 2. Why is a Client?
  A client is the user who makes a request.
#### 3. Is a server just another physical computer?
  A server can be a virtual machine or a physical computer, but it always depends on a hardware. Sometimes we refer to APIs as Servers because they provide information 
  when a request is made. The difference is that these applications provide information to other apps, like an intermediary; and a Server executes the information 
  directly to the client.
#### 4. Is there any similarity between human communication and the client-server model?
  When we talk to other person, we are exchanging information. Sometimes we ask a question or make a request in order to receive and answer or response, similar to the 
  client-server model.
#### 5. Is the client-server model applicable only to the Web?
  This model can be used in any situation that requires to send and receive information. It's applicable in mobile development, videogames, etc.
___
## Thursday
#### 1. What is an API?
  An Application Programming Interface (API) makes the connection between the backend and the fronted, in order to exchange information.
#### 2. What is a Protocol?
  A Protocol is a set of rules that need to be followed to send data across the network. It has to be secure and reliable.
#### 3. Is the term API only applicable to the communication of programs over the Internet?
  Not necessarily. APIs can be use inside the same program to communicate to other modules.
#### 4. Why is structured communication between two programs important?
  Because clients rely on programs to get the correct information. Communication between programs needs follow protocols to avoid mistakes.
#### 5. Is an API just another program or a standard?
  An API is a standard that establishes the way data is processed inside programs.
#### 6. Do you know any API? Can you list at least 5 examples of APIs?
  There are many APIs free to use in projects:
  - Cat Fact API - Random facts about cats
  - PokeApi - Pokemons
  - Agify.io - Predicts the age of a name
  - Dog API - Collection of dog pictures
  - RandomUser - Generates a random user data

<h1 align="center">Week 4</h1>

## Wednesday
### 1. Simple Validation Of A Username
```javascript
  function validateUsr(username) {
    res =  /^([a-z]|\d|_){4,16}$/g
    return res.test(username)
  }
```

### 2. Get Number From String
```javascript
  function getNumberFromString(s) {
    res = /\D/g
    return parseInt(s.replace(res, ''))
  }
```
___

## Thursday
### 1. String Cleaning
```javascript
  function stringClean(s){
    return s.replace(/\d/g, '')
  }
```

### 2. Get Number From String
```javascript
  function getNumberFromString(s) {
    res = /\D/g
    return parseInt(s.replace(res, ''))
  }
```

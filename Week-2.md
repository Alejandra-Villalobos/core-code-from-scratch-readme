<h1 align="center">Week 2</h1>

## Tuesday
### 1. Multiply
```javascript
  //The return was missing
  function multiply(a, b){
    return a * b
  }
```

### 2. ASCII Total
``Sums the ASCII code of a string``
```javascript
  function uniTotal (string) {
    var total = 0;
    for(let i = 0; i<string.length; i++){
      total += string.charCodeAt(i)
    }
    return total
  }
```

### 3. Char From ASCII Value
``Gets the ASCII char from the given number``
```javascript
  function getChar(c){
    //Validates if "c" is a number 
    if(typeof(c) === 'number')
      return String.fromCharCode(c);
    else
      return console.error("The input must be a number");
  }
```

### 4. Binary Addition
``Returns the sum converted to binary``
```javascript
  function addBinary(a,b) {
    return (a+b).toString(2);
  }
```

### 5. Student's Final Grade
``Returns the final grade of a student``
```javascript
  function finalGrade (exam, projects) {
    if(exam>90 || projects>10)
      return 100
    else if(exam>75 && projects>=5)
      return 90
    else if(exam>50 && projects>=2)
      return 75
    else
      return 0
  }
```
___

## Wednesday
### 1. Holiday VIII - Duty Free
``Returns the ammount of bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday``
```javascript
  function dutyFree(normPrice, discount, hol){
    let priceDiscount = normPrice*(discount/100)
    //Math.floor() rounds down the number
    return Math.floor(hol/priceDiscount)
  }
```

### 2. Twice As Old
``Сalculates how many years ago the father was twice as old as his son (or in how many years he will be twice as old)``
```javascript
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    //Math.abs() converts the number to positive
    return Math.abs(dadYearsOld-(sonYearsOld*2))
  }
```

### 3. Valid Spacing
``Validates if there is extra spacing in a string``
```javascript
  function validSpacing(s) {
    //The string can be empty
    if(s.length==0)
      return true
    //There can't be space at the beginning or a the end
    else if(s.startsWith(' ') || s.endsWith(' '))
      return false
    let words = s.split(' ')
    for(let i = 0; i<=words.length; i++){
      //After spliting the string, there can't be a blank space
      if (words[i]==='')
        return false
    } 
    return true
  }
```

### 4. Fake Binary
``Replaces any digit below 5 with '0' and any digit 5 and above with '1'``
```javascript
  function fakeBin(x){
    let num = ""
    for(let i = 0; i<x.length; i++){
      if(x[i]<5)
        num = num.concat(0)
      else 
        num = num.concat(1)
    }
    return num
  }
```
___

## Thursday
### 1. Remove All Exclamation Marks From The End Of Sentence 
```javascript
  function remove (string) {  
    //Regular expression that searches all the '!' signs at the end
    var regex = /!+$/g
    var end = string.search(regex)
    if(end>1)
      //Returns the string from the beginning to the position where the final '!' signs start
      return string.substring(0, end)
    else
      return string
  }
```

### 2. Vowel Remover
``Removes all the vowels in a string``
```javascript
  function shortcut (string) {
    //Regex that searches all the vowels in lowercase
    let regex = /[aeiou]+/g
    return string.replace(regex, '')
  }
```

### 3. Rock Paper Scissors!
```javascript
  const rps = (p1, p2) => {
    if(p1===p2)
      return 'Draw!'
    else if((p1==='scissors' && p2==='paper') || (p1==='rock' && p2==='scissors')
           || (p1==='paper' && p2==='rock'))
      return 'Player 1 won!'
    else
      return 'Player 2 won!'
  };
```

### 4. Persistent Bugger 
``Takes in a positive number and returns its multiplicative persistence``
```javascript
  function persistence(num) {
    let count = 0;
    //For 0 iterations
    if(num<10)
      return 0
    do{
      //Saves every digit individually
      let splitNums = num.toString().split('');
      num = 1;
      for (let i = 0; i < splitNums.length; i++) {
        //Multiplies the digits
        num *= splitNums[i];
      }
      count++;
    //It stops when we have only one digit
    }while(num>=10)
      return count;
  }
```

<h1 align=center>Week 6</h1>

## Monday
### 1. Square(n) Sum
```typescript
export function squareSum(numbers: number[]): number {
    return numbers.reduce((x: number, y: number) => x + Math.pow(y, 2), 0);
}
```

### 2. Growth Of A Population
```typescript
export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
      let years = 0;
      do{
        p0 = parseInt(p0 + p0 * (percent/100) + aug);
        years++;
      }while(p0<p)
      return years
    }
}
```
### 3. Growth Of A Population
```typescript
export function accum(s: string): string {
  let arr = s.split('');
  return arr.map((letter: string, index: number) => 
               `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`)
                .join('-')
}
```

### 4. A Wolf In Sheep's Clothing
```typescript
export function warnTheSheep(queue: string[]): string {
  let queueReverse = queue.reverse();
  let wolfIndex = queueReverse.indexOf('wolf');
  if('wolf'===queueReverse[0])
    return `Pls go away and stop eating my sheep`
  else
    return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
}
```
___
## Tuesday
### 1. A Rule Of Divisibility By 13
```typescript
export function thirt(n: number): number {
  let rem = [1, 10, 9, 12, 3, 4];
  let reversed = n.toString().split('').reverse();
  let result = reversed.map((x: string, y: number) => parseInt(x) * rem[y%6])
      .reduce((a: number, b: number) => (a += b));
  if(n === result) return result;
  else return thirt(result);
}
```
### 2. Playing with digits
```typescript
export class G964 {

    public static digPow = (n: number, p: number) => {
      let numArr = n.toString().split('');
      let sum = numArr.map(Number).reduce((a: number, b: number) => a + Math.pow(b, p++), 0)
      if (sum % n === 0) return sum / n;
      else return -1;
    }
}
```
### 4. Tic-Tac-Toe
```javascript
function solveTTT(board) {
  var win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i in win)
    if (win[i].map((x) => board[x]).join('') == 'XX')
      return win[i].reduce((x, y) => (board[y] == '' ? x + y : x), 0);
  for (var i in board) if (board[i] == '') return +i;
}
```
### 5. Tic-Tac-Toe-Like Table Generator 
```javascript
const pad = (str, char) => char + str + char;
const row = (arr) => arr.map((x) => pad(x, ' ')).join('|');
const line = (w) => pad([...Array(w)].fill('---').join('-'), '\n');
const reshape = (arr, w, res = []) =>
  arr.length > 0
    ? reshape(arr.slice(w), w, res.concat([arr.slice(0, w)]))
    : res;
const displayBoard = (board, width) =>
  reshape(board, width).map(row).join(line(width));
```
___
## Wednesday
### 1. Duplicate Encoder
```typescript
export function duplicateEncode(word: string){
  let arr = word.toLowerCase().split('');
  let replacedArr: string[] = [];
  arr.forEach((w: string) => {
    if(arr.indexOf(w) === arr.lastIndexOf(w))
      replacedArr.push("(")
    else replacedArr.push(")")
  })
    return replacedArr.join('')
}
```
### 2. Find The Odd Int
```typescript
export const findOdd = (xs: number[]): number => {
  let sorted: number[] = xs.sort();
  let oddInt: number = 0;
  for(let i = 0; i<sorted.length; i++){
    if((sorted.lastIndexOf(sorted[i])-sorted.indexOf(sorted[i]))%2===0){
      oddInt = sorted[i]; 
      break;
    }
  }
  return oddInt;
};
```
### 3. Which Are In?
```typescript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1.filter((a1s: string) => a2.some((a2s: string) => a2s.indexOf(a1s)!==-1)).sort();
  }
}
```
### 4. Sums of Parts
```typescript
export function partsSums(ls: number[]): number[] {
  let sumArr: number[] = [];
  let x: number = ls.reduce((a, b)=> a+b, 0)
  sumArr.push(x);
  for(let i = 0; i<ls.length; i++){
    sumArr.push(sumArr[i]-ls[i]);
  }
  return sumArr
}
```
### 5. Consecutive Strings
```typescript
export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
  let concatedArr: string[] = [];
  if(k>1){
     for(let i = 0; i<strarr.length-1; i++){
      concatedArr.push(strarr.slice(i, i+k).join(''))
     }
  }
  else concatedArr=strarr.map(String)
  let maxLength: number = 0;
  let longWord: string = '';
  for(let i = 0; i<concatedArr.length; i++){
    if(concatedArr[i].length>maxLength){
      maxLength = concatedArr[i].length
      longWord = concatedArr[i]
    }
  }
  return longWord
}
```
## Thursday
### 1. Tile
```typescript
export class Tile {
  letter: string;
  value: number;

  constructor(letter: string, value: number) {
    this.letter = letter;
    this.value = value;
  }

  printTile() {
    console.log(`
        ___________________________
          Letter: ${this.letter}
          Value: ${this.value}
        ___________________________
    `);
  }
}
```
### 2. Time
```typescript
export class Time {
  hour: number;
  minute: number;
  second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  getInSeconds(): number {
    return this.hour*60*60 + this.minute*60 + this.second;
  }
  
  printTime() {
    console.log(`
        ___________________________
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ___________________________
    `);
  }

}
```
### 3. Rational
```typescript
export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  printRational() {
    console.log(`${this.numerator} / ${this.denominator}`);
  }
  
  invert() {
    [this.numerator, this.denominator] = [this.denominator, this.numerator];
  }
  
  toFloat(): number {
    return this.numerator / this.denominator;
  }
  
  gcd(n: number, d: number): number {
    if (d == 0) return n;
    return this.gcd(d, n % d);
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
  }

}
```

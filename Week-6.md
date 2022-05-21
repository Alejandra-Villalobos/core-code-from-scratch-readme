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

<h1 align=center>Week 6</h1>

## Monday
### 1. Square(n) Sum
```typescript
export function squareSum(numbers: number[]): number {
    return numbers.reduce((x: number, y: number) => x + Math.pow(y, 2), 0);
}
```

### 1. Growth Of A Population
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
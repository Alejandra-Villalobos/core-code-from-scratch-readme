### Build Tower
``Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.``
```typescript
export const towerBuilder = (nFloors: number): string[] => {
  let tower: string[] = []
  for(let i = 1; i<=nFloors; i++){
    let floor = `${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(nFloors - i)}`
    tower.push(floor)
  }
  return tower
}
```

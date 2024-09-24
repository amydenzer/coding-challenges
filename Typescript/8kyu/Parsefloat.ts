// Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.

// Solution
export function parseF(s:string): number|null {
    let float = parseFloat(s);
    
    return isNaN(float) ? null : float;
  }


// Best Practices

// export function parseF(s: string): number | null {
//     return isNaN(parseFloat(s)) ? null : parseFloat(s);
//   }


// export function parseF(s:string):number {
//     return +s ? +s : s === '0' ? 0 : null;
//   }
function add(a: number, b: number): number {
  return a + b;
}

let sum = add(5, 10);
console.log(sum);

const greetingText = (name: string, customGreeting?: string): string => {
  if (customGreeting) return `${customGreeting} ${name}`;
  return `Hello ${name}`;
};

const defaultGreeting = (
  name: string,
  customGreeting: string = "Hello",
): string => {
  return `${customGreeting} ${name}`;
};

console.log(greetingText("Omar"));
console.log(greetingText("Omar", "Welcome GOAT"));

function infiniteParamsSum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + sum, 0);
}

console.log(infiniteParamsSum(1, 2, 10, 7, 8));

function voidFn(): void {
  console.log("void fn");
}

function neverFn(msg: string): never {
  throw new Error(msg);
}

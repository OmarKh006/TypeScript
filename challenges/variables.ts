let score: number = 10;
score = 15;

const maxScore: number = 100;
// maxScore = 90 ❌

let firstName: string = "Omar";
let lastName: string = "Khairy";
const name: string = `${firstName} ${lastName}`;

let u: undefined;
let n: null = null;

//Union types
let id: number | undefined;
id = 100;

//Any
let randomValue: any;
randomValue = 10;
randomValue = "hello";
randomValue = true;

//Unknown
let unknown: unknown;
unknown = "Ts";
unknown = 123;

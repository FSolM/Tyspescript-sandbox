let string: string;
let num: number;
// Nums can accept decimal, expressions and hexadecimal numbers
let bool: boolean;
let variable: any;

let string_array: string[];
let num_array: number[];
let bool_array: boolean[];

/*
  Arrays can also be declared as:
  - Array<string>
  - Array<number>
  - Array<boolean>
*/

let tuple: [string, number];

string = 'Hello there!';
num = 22;
bool = true;
variable = 'Any!'

string_array = ['String1', 'String2', 'String3'];
num_array = [1, 2, 3];
bool_array = [true, true, false];

tuple = ['Hey!', 10];

let nothing: void = null;
let nothing2: null = null;
let nothing3: undefined = undefined;

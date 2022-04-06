// const myName = "your name";

import { type } from "os"

// const hello = (userName: string): string => `hello, ${userName}`;

// console.log(hello);

// const myFunc = (student: String): number => {
//     console.log(student);
//     return 5;
// }

// const param = "hello";
// console.log(typeof myFunc(param));

interface Student
{
    name: string,
    age: number,
    enrolled: boolean
}

interface Student
{
    name: string,
    sex: string,
    age: number,
    enrolled: boolean
}

let aStudent: Student = {
    name: 'Maverick',
    age: 24,
    enrolled: true,
    sex: "male"
}

type Student = 
{
    name: string,
    age: number,
    enrolled: boolean
}
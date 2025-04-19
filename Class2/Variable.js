console.log('Hello world!')

var a=1;
console.log(a)
console.log(typeof a)

a='hello'
console.log(a)
console.log(typeof a)

const num=23
console.log(num)


//=43

let b = 5
console.log(b)

b='String'
console.log(b)
{
    let c =7
}

//sole.log(c)
//Types
//Number Types
console.log(typeof 1)
console.log(typeof 1.0)


//String type
console.log(typeof 'string')
console.log(typeof "string")

//Boolean type
console.log(typeof false)
console.log(typeof true)

//null type
const notExists= null;
console.log(notExists)
console.log(typeof notExists)


//undefined type
let notDefined
console.log(notDefined)
console.log(typeof notDefined)

const student = {
    name: 'John',
    age: 21,
    hadBreakfast: true,
    greet() {
      console.log(this.name + ' says hello');
    }
  };
  
  console.log(typeof student)
  console.log(student); 
  student.greet();          


//OPERATOR
    //Comparison operator 

    const number =1
    const stringNum ='1'

    console.log (typeof number)
    console.log(typeof stringNum)
  

    console.log(number==stringNum)
    console.log(number===stringNum)


    console.log(number!=stringNum)
    console.log(number!==stringNum)

    console.log(typeof number === stringNum ? 'number': 'string')

    console.log(number + stringNum, typeof (number + stringNum))
    console.log(number + stringNum, typeof (number - stringNum))

    console.log(Number('1'))
    console.log(Number('Not a number'))

    const notANumber = NaN
    console.log(NaN == NaN)
    console.log(Number)
    
    



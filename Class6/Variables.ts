const MyName: string="John";
//MyName.toLowerCase()
const age: number= 30;


type Student ={
    name:string;
    age: number;

}

const student: Student={
    name: MyName,
    age: age
}

type CSEStudent = Student & {
    canDoCoding: boolean
}


const CSEStudent : student ={

}
interface Vegetable{

    name: string;
    weight: number;
    isRotten:boolean;
}

const potato: Vegetable= {
    name: "Potato",
    weight: 5,
    isRotten: false
}

interface FavoriteVegetable extends Vegetable {
    isFavorite : boolean;

}

const cucumber : FavoriteVegetable={
    name: "Potato",
    weight: 5,
    isRotten: false,
    isFavorite: true
}


const notKnown: any =1;

const strictAny:  unknown =12;
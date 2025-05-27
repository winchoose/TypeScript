//타입 좁히기
//조건문 등을 이용해 넓은 타입에서 좁은 타입으로

type Person = {
    name: string;
    age: number;
};

function func(value : number | string | Date | Person){
    if(typeof value === "number"){
        console.log(value.toFixed());
    }
    else if (typeof value === "string"){
        console.log(value.toUpperCase());
    }
    else if(value instanceof Date){
        console.log(value.getTime());
    }else if (value && "age" in value){
        console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
}
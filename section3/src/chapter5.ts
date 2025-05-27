
let a = 10;
let b = "hello";

let c = {
    id: 1,
    name: "이정한",
    porfile: {
        nickname: "taek2"
    },
    urls: ["http"]
};

let {id, name, porfile} = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}
//암묵적 any타입은 진화한다.
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];


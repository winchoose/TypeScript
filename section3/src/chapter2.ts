function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;
    // let num: number = unknownVar
}

function neverExam(){
    function neverFunc(): never{
        while(true){}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    //let never1: never = 10;
}

function voidExam(){
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = undefinedVar;

    undefinedVar = anyVar;

    //neverVar = anyVar;
}
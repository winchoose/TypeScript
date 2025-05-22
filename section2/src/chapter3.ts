let user: {
    id?: number,
    name: string,
} = {
    id: 1,
    name: "오승택",
};

let dog: {
    name: string,
    color: string,
}={
    name: "토리",
    color: "brown",
};


user = {
    name: "오승택",
};

let config: {
    readonly apiKey: string; //읽기 전용
} = {
    apiKey: "MY API KEY"
};

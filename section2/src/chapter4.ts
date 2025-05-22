
type User = {
    id: number,
    name: string;
    nickname: string,
    birth: string,
    bio: string,
    location: string,
}; 

let user: User = {
    id: 1,
    name: "오승택",
    nickname: "Taek2",
    birth: "2001.03.10",
    bio: "안녕하세요",
    location: "서울시"
};

type CountryCodes = {
    [key : string]: string,
}

let countryCodes: CountryCodes= {
    korea: "ko",
    UnitedState: "us",
    Unitedkingdom: "uk",
}

type CountryCNumberodes = {
    [key: string]: number,
    Korea: number,
}

let countryCNumberodes: CountryCNumberodes = {
    Korea: 410,
    UnitedState: 840,
    Unitedkingdom: 826,
}
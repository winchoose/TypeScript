
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "오승택",
    role: Role.ADMIN, //관리자
    language: Language.korean
}
const user2 = {
    name: "이원진",
    role: Role.USER,
}
const user3 = {
    name: "장정훈",
    role: Role.GUEST, 
}

console.log(user1, user2, user3);
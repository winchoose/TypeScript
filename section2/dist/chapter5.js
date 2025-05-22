var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "오승택",
    role: Role.ADMIN, //관리자
    language: Language.korean
};
const user2 = {
    name: "이원진",
    role: Role.USER,
};
const user3 = {
    name: "장정훈",
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};

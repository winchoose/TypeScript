//서로소 유니온 타입
//교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER"
    name: string;
    point: number;
};

type Guest = {
    tag: "GUSET"
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

function login(user:User) {
    switch(user.tag){
        case "ADMIN":{
             console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
             break
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break
        }
        case "GUSET": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
        }
    }

    /*if(user.tag === "ADMIN"){
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if(user.tag === "MEMBER"){
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
    }*/
}


//비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state: "LOADING",
};

type FailedTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~",
    },
};

type SuccessTask = {
    state: "SUCCESS",
    response: {
        data: "데이터~~",
    },
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask


function processResult(task:AsyncTask){
    switch(task.state) {
        case "LOADING": {
            console.log("로딩 중")
            break;
        }
        case "FAILED": {
            console.log(`에러 발생 : ${task.error.message}`)
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~",
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터~~",
    },
};
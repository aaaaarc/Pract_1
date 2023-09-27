// Задание 2

var Users = [
    [1, "Сэм", 38],
    [2, "Мерри", 36],
    [3, "Пиппин", 28],
    [4, "Боромир", 41],
];

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

async function getUser(ID) {
    await sleep(3);
    for (let i = 0; i < Users.length; i++) {
        if (ID == Users[i][0]) {
            console.log(Users[i]);
            return Users[i];
        }
    }
}

var ID_arr = [];
for (let i = 0; i < Users.length; i++) {
    var user_id = Users[i][0];
    ID_arr.push(user_id);
}

async function loadUsersSquentially(ID_arr) {
    for (let i = 0; i < ID_arr.length; i++) {
        await getUser(ID_arr[i]);
    }
}

async function loadUsersInParallel(ID_arr) {
    const promise_test = Array(ID_arr.length).fill(null).map((_, i) => getUser(ID_arr[i]));
}

async function print() {
    await getUser(3);
    loadUsersSquentially(ID_arr);
    loadUsersInParallel(ID_arr);
}

print();









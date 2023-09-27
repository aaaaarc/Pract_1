var Users = [
    ["Леголас", 2931, ["г. Лихолесье", "ул. Зеленая", "д. 1"]],
    ["Фродо", 37, ["г. Шир", "ул. Садовая", "д. 2"]],
    ["Арагорн", 87, ["г. Минас Тирит", "ул. Белая", "д. 3"]],
    ["Гимли", 139, ["г. Эребор", "ул. Каменная", "д. 4"]]
];

// [0][0]

function getTotalAge(Users){
    var TotalAge = 0;
    
    for (let i = 0; i < Users.length; i++) {
        TotalAge += Users[i][1];
    }

    return TotalAge;
}

var TotalAge = getTotalAge(Users);

console.log("Суммарный возраст пользователей: ");
console.log(TotalAge);

function getUsersStreets(Users){
    var UsersStreets = [];
    var street = " ";
    
    for (let i = 0; i < Users.length; i++) {
        street = Users[i][2][1];
        UsersStreets.push(street)
    }
    
    return UsersStreets;
}

var UsersStreets = getUsersStreets(Users);

console.log("Названия улиц пользователей: ");
console.log(UsersStreets);

function getOldPeople(Users){
    var OldPeople = [];
    var person = " ";
    
    for (let i = 0; i < Users.length; i++){
        age = Users[i][1];
        
        if (age > 60) {
            person = Users[i][0];
            OldPeople.push(person);
        }
    }
    
    return OldPeople;
}

OldPeople = getOldPeople(Users);

console.log("Пользователи, старше 60 лет: ");
console.log(OldPeople);
















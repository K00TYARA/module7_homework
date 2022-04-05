// Фунцкия принимает в качестве аргументов строку и объект, а затем
// проверяет есть ли у переданного объекта свойство с данным именем

function findObject(obj, str){
    for (let key in obj){
        if (key === str){
            return true;
        }
    }
    return false
}

const person1 = new Object({
    name: "Vanya",
    surname: "Ivanov",
    age: 15,
    greet: function () {
        console.log("Great!");
    }
})

console.log(findObject(person1, "greet"));

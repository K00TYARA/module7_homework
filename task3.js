// Функция создает объект без прототипа

function createObj(){
    return Object.create(null);
}

const obj = createObj();
obj.a = 5;
console.log(obj);
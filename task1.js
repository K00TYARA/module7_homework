// Функция  принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств


function showValues(obj){
    for (let key in obj){
        if(obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, Значение: ${obj[key]};`);
        }
    }
}

const place = {
    country: "France",
    city: "Paris"
};

const user = Object.create(place);

user.name = "Sergey";
user.surname = "Smirnov";
user.age = 23;
user.position = "developer";


showValues(user);
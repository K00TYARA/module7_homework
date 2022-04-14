// Родительская функция "Электро приборы"
function ElectroDevices(name, color, power) {
    this.name = name;
    this.color = color;
    this.power = power;
    this.isPlugged = false;
}

// Переменная для потребляемой энергии
let allPower = 0;

// Функция выводит потребляемую энергию
function usedPower(){
    console.log(`Потребляемая на данный момент мощность: ${allPower}\n`);
}

// Прототип для родительской функции, который включает прибор в розетку
ElectroDevices.prototype.turnOn = function (){
    this.isPlugged = true;
    allPower += this.power;
    console.log(`${this.name} включили в розетку`);
}

// Прототип для родительской функции, который выключает прибор из розетки
ElectroDevices.prototype.turnOff = function (){
    this.isPlugged = false;
    allPower -= this.power;
    console.log(`${this.name} выключили из розетки`);
}

// Создание экземпляры
const notebook = new ElectroDevices("notebook", "black", 100, );
const lamp = new ElectroDevices("lamp", "yellow", 20, );
const TV = new ElectroDevices("TV", "gray", 80, );
const battery = new ElectroDevices("battery", "white", 30);

// Включение/выключение прибора в розетку/из розетки
lamp.turnOn();
battery.turnOn();

// Вызов функции, которая выводит потребляемую мощность
usedPower();

battery.turnOff();
notebook.turnOn();

usedPower();

// Вывод всех экземпляров
console.log(notebook);
console.log(lamp);
console.log(TV);
console.log(battery);
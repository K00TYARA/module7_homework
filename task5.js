// Родительская класс "Электроприборы"
class ElectroDevices {

    // Конструктор принимающий значения и присваивающий их приборам
    constructor(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
        this.isPlugged = false;
    }

    // Метод выводит потребляемую энергию
    static usedPower(allPower){
        console.log(`Потребляемая на данный момент мощность: ${allPower}\n`);
    }

    // Метод для родительского класса, который включает прибор в розетку
    turnOn(){
        this.isPlugged = true;
        allPower += this.power;
        console.log(`${this.name} включили в розетку`);
    }

    // Метод для родительского класса, который выключает прибор из розетки
    turnOff(){
        this.isPlugged = false;
        allPower -= this.power;
        console.log(`${this.name} выключили из розетки`);
    }
}

// Создаем новый класс для приборов, которых есть экран, прототипом которого является класс "Электроприборы"
class Screen extends ElectroDevices {

    constructor(name, color, power) {
        super(name, color, power);
        this.isScreen = true;
    }

    turnOn() {
        super.turnOn();
    }

    turnOff() {
        super.turnOff();
    }
}

// Переменная для потребляемой энергии
let allPower = 0;


// Создание экземпляров
const notebook = new Screen("notebook", "black", 100, );
const lamp = new ElectroDevices("lamp", "yellow", 20, );
const TV = new Screen("TV", "gray", 80, );
const battery = new ElectroDevices("battery", "white", 30);

// Включение/выключение прибора в розетку/из розетки
lamp.turnOn();
battery.turnOn();

// Вызов функции, которая выводит потребляемую мощность
ElectroDevices.usedPower(allPower);

battery.turnOff();
notebook.turnOn();

ElectroDevices.usedPower(allPower);

// Вывод всех экземпляров
console.log(notebook);
console.log(lamp);
console.log(TV);
console.log(battery);

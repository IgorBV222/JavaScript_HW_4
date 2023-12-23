//Задание. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость). 
let car = {
	manufacturer: 'GM',
	model: 'Chevrolet Cruze',
	yearOfIssue: '2012',
	averageSpeed: 75,
};

//В программе должны содержаться следующие функции:
    //1. Функция для вывода на экран информации о автомобиле (с помощью одного alert);
    function everythinпAboutCar (objCar) {
        //alert(Object.entries(objCar).join('\n'));
        alert('Производитель: ' + objCar.manufacturer + '\n' + 'Модель: ' + objCar.model + '\n' + 'Год выпуска: ' + objCar.yearOfIssue + '\n' + 'Средняя скорость: ' + objCar.averageSpeed);
    }
    everythinпAboutCar (car);
    //2. Функция для подсчета необходимого времени (в часах) для преодоления переданного расстояния со средней скоростью. 
    //Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час;
    function travelTime(objCar) {
        let distance = +prompt("Введите расстояние:");
        let res = distance/objCar.averageSpeed + (Math.ceil(distance/objCar.averageSpeed/4) - 1);    
        let hour = Math.floor(res);
        let min = Math.round((res - hour) * 60);
        let sec = Math.round(((res - hour) * 60 - min) * 60);
        console.log("Время в пути со среденй скоростью составит " + res + " часа. \n Это " + hour + " ч. " + min + " мин. " + sec + " сек.");
        alert(`Время в пути со среденй скоростью составит ${res} часа,\nили ${hour} ч ${min} мин ${sec} сек `);
    }
    travelTime(car)

    //3. Функция, возвращающая количество лет, прошедших с момента выпуска автомобиля. Функция должна сама брать системное время пользователя.
    function carAge (objCar) {
        let carYearOfIssue = objCar.yearOfIssue;
        let currentYear = new Date().getFullYear();
        return currentYear - carYearOfIssue;      
    }
    console.log("Возраст автомобиля: " + carAge(car) + " лет.");
    alert('Возраст автомобиля: ' + carAge(car) + " лет.");



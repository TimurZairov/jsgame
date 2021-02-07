'use strict'
const  game = function(){
    let number = 30; 

    let searchNumber = function(){
        const askNumber = prompt('Угадай число от 1 до 100"');
        console.log (askNumber);

        if(isNaN(askNumber) || askNumber === '' || askNumber === null){
            alert('введи число!')
            searchNumber();
        }else if (+askNumber > number) {
            alert('Загаданное число меньше')
            searchNumber();
        }else if (+askNumber < number) {
            alert('Загаданное число больше')
            searchNumber();
        }else if (+askNumber === number) {
            alert('Ты победил!');
            const repeatGame = confirm('Сыграем еще?')
            if (repeatGame){
                game();
            }else {
                return;
            }
        }
    };
    searchNumber();
};
game();

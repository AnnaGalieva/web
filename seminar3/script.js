'use strict';
//создать всплывающее диалоговое окно с произвольным текстом: например, «Привет, Мир!».
//alert('hello world'); 


// вычислить результат 158+2 и вывести значение выражения в диалоговое окно.
//alert(158+2);
//или
//alert(`результат:${158+2}`);


//передать строковый параметр в диалоговое окно. Например, вывести «Привет, Алевтина!», 
//где имя — это передаваемый параметр
//let userName = prompt("Введите Ваше имя: ");
//alert("Привет, " + userName);
//или
//let userName = prompt("Введите Ваше имя: ");
//alert(`Привет,  ${userName}`);


//вызвать диалоговое окно с заголовком «Как вас зовут?» и подсказкой «Имя» в поле ввода.
// Затем вывести имя, которое ввели.
//let userName = prompt("Как Вас зовут?","ivan");//по умолчанию предлагает имя
//alert("Привет, " + userName);


//написать функцию, выводящую в диалоговом окне текст и переменную. Например, 
//«Привет, Алевтина». Где «Алевтина» — это внешняя переменная.
// let userName = "alevtina";
// function showName() {
//     alert("Привет," + userName);    
// }
// showName();
//или
// let userName = "alevtina";
//  function showName(uname) {
//      alert("Привет," + uname);    
//  }
//  showName(userName);




//вывести на экран ****в диалоговом окне текст с сообщением “Вы уверены?”
//и кнопками «ОК» , «Отмена».
// - При нажатии на кнопку “ОК”
// вывести в диалоговом окне текст с сообщением “Мы рады, что Вы уверены!”.
// - При нажатии на кнопку “Отмена”
// вывести в диалоговом окне текст с сообщением “Жаль, что Вы не уверены…”.
// </aside>
// let confirmation = confirm("Вы уверены?");
// if (confirmation) {
//     alert("Мы рады, что Вы уверены!");
// } else {
//     alert("Жаль, что Вы не уверены…");
// }



//перепешите код используя switch-case запрашивая возраст пользователя через диалоговое окно
// let age=101;
// if (age==18) {
//     alert('Вы совершеннолетний,вме можно');
// } else if(age==10) {
//     alert('вам надо учить уроки');
// } else if (age==30) {
//     alert('ложитесь спать,завтра на работу');
// } else {
//     alert('мы не знаем что вам делать');
// }
//итого:
// let age = Number(prompt("ваш возрвст"));
// switch (age) {
//     case 18:
//         alert('Вы совершеннолетний,вме можно');
//         break;
//     case 10:
//         alert('вам надо учить уроки');
//         break;
//     case 30:
//         alert('ложитесь спать,завтра на работу');
//         break;
//     default:
//         alert('мы не знаем что вам делать');
// }
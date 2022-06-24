//создать страницу, которая спрашивает имя у пользователя 
//и выводит его с помощью функции.

let userName = prompt("Как Вас зовут?", "Имя");
function showName() {
    alert("Привет," + userName);
}
showName();
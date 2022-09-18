/*Напишите код приложения, который содержит в себе 2 инпута и кнопку, при нажатии происходит следующее:

Если число не совпадает от 100 до 500 — выводить ниже текст «число вне диапазона от 100 до 500»
Если число попадает в диапазон от 100 до 500 — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all,
где get-параметр 320 и 240 — это введённые числа..
Пример: если пользователь ввёл 320 и 240, то запрос будет вида https://loremflickr.com/json/g/320/240/all.
После получения данных вывести ниже картинку на экран. */

function show_image(src, width, height) {  //Для вывода картинки на экран
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
}

function getQuery ( number1, number2, range ) { //Для отправки запроса на сервер
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log('статус: ${xhr.status}; Результат: ${xhr.response}');
        show_image(`${xhr.response}`,100,100);
    }
    xhr.onerror = function () {
        console.log('Ошибка запроса');
    }
    if (number1 == 320 && number2 == 240) {
        xhr.open("get", `https://loremflickr.com/json/g/320/240/all`, true);
        xhr.send();

    }
    else
    if (range) {
        xhr.open("get", `https://loremflickr.com/json/g/${number1}/${number2}/all`, true);
        xhr.send();
    }

}

const btn = document.querySelector('.but');

btn.addEventListener('click', () => {
 let inp1 = document.querySelector('.inp1');
 let inp2 = document.querySelector('.inp2');
 if (inp1.value < 500  && inp1.value > 100 && inp2.value < 500  && inp2.value > 100)  {
     alert("В диапазоне!");
     getQuery(inp1.value, inp2.value, true)

 }
    else alert("число вне диапазона от 100 до 500");
})


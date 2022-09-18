/*Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число.
При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all,
где get-параметр limit — это введённое число.
Пример. Если пользователь ввёл 5, то запрос будет вида: https://loremflickr.com/json/g/320/240/all.
После получения данных вывести ниже картинки на экран.

 */
function show_image(src, width, height) {  //Для вывода картинки на экран
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
}

function getQuery ( number ) { //Для отправки запроса на сервер
    const xhr = new XMLHttpRequest();
    xhr.open("get", `https://loremflickr.com/json/g/320/240/all`, true);

    xhr.onload = function () {
        console.log('статус: ${xhr.status}; Результат: ${xhr.response}');
        show_image(`${xhr.response}`,100,100);
    }

    xhr.onerror = function () {
        console.log('Ошибка запроса');
    }

    xhr.send();
}

const btn = document.querySelector('.but'); //Ищем button

btn.addEventListener('click', () => {
    let inp1 = document.querySelector('.inp1'); //Ищем Input
    let out = document.querySelector('.output'); //Ищем Output

    if (inp1.value < 1  || inp1.value > 10)
        out.innerHTML = "число вне диапазона от 1 до 10";
    else
        { out.innerHTML = "В диапазоне!";
        getQuery(inp1.value);
    }
})


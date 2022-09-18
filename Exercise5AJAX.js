/*Напишите код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10».
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10».
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10».
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10,
где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
/
Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage). */

function show_image (src, width, height) {  //Для вывода картинки на экран
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
}

if (sessionStorage.getItem("is_reloaded")) { //страница перезагружена , показываем картинки
    const myCount = localStorage.getItem('pictureCounter');//Cчитываем кол-во картинок из localStorage
    if (myCount) { //Если данные в localStorage есть - просто выводим их
        for (let i = 0; i < myCount; i++) {
            const myPic = localStorage.getItem(`pic${i}`);//Cчитываем urlы картинок
            show_image(myPic, 100, 100); //Показываем картинки
        }
    }
}
const btn = document.querySelector('.but'); //Ищем кнопку

btn.addEventListener('click', () => { //Добавляем событие на кнопку
    let inp1 = document.querySelector('.inp1'); //Ищем Input1
    let inp2 = document.querySelector('.inp2'); //Ищем Input2
    let out = document.querySelector('.output'); //Ищем Output

 //Проверяем на условия введенные числа
    if (inp1.value < 1 || inp1.value > 10 || isNaN(inp1.value)) { out.innerHTML = "Номер страницы вне диапазона от 1 до 10." };
    if (inp2.value < 1  || inp2.value > 10 || isNaN(inp2.value)) { out.innerHTML = "Лимит вне диапазона от 1 до 10." };
    if ((inp1.value < 1 || inp1.value > 10 || isNaN(inp1.value)) && (inp2.value < 1  || inp2.value > 10 || isNaN(inp2.value)))
    { out.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10" };
    if ((inp1.value > 1 && inp1.value < 10 && !isNaN(inp1.value)) && (inp2.value > 1 && inp2.value < 10 && !isNaN(inp2.value)))
    {   out.innerHTML = "В диапазоне!";
        fetch(`https://picsum.photos/v2/list?page=${inp1.value}&limit=${inp2.value}`)
            .then((response) => {
                //console.log('response', response);
                const result = response.json();
                console.log('result', result);
                return result;
            })
            .then((data) => {
                console.log(data.length); //получаем массив картинок . Из него выбираем URLы картинок
                for (let i=0; i<data.length; i++) {
                    console.log(data[i].author, data[i].url);
                    show_image(data[i].url,100,100); //Показываем картинки
                    localStorage.setItem(`pic${[i]}`, `${data[i].url}`);//Записываем в LocalStorage автора и URL
                    localStorage.setItem('pictureCounter', `${data.length}`);//Записываем кол-во картинок
                    sessionStorage.setItem("is_reloaded", true); //Флаг что первая загрузка прошла
                }
            })
            .catch(() => { console.log ('error') });
    };
})


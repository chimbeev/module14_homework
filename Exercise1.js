/*Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
*/

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// XML, который мы будем парсить
const xmlString = `<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
let result = [];
// Получение всех DOM-нод

    let studentNodes = xmlDOM.querySelectorAll("student");
    studentNodes.forEach((studentNode) => {
        let nameNode = studentNode.querySelector("name");
        let firstName = studentNode.querySelector("first");
        console.log(firstName);
        let secondName = studentNode.querySelector("second");
        let ageNode = studentNode.querySelector("age");
        let profNode = studentNode.querySelector("prof");

// Получение данных из атрибутов
        let langAttr = nameNode.getAttribute('lang');
        result.push([ { name: firstName.textContent + ' ' + secondName.textContent, age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr }])
    });

console.log('result', result);

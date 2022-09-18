/*Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

    JSON*/
const jsonString = `
{
    "list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}`;
/*JS-объект

{
    list: [
        { name: 'Petr', age: 20, prof: 'mechanic' },
        { name: 'Vova', age: 60, prof: 'pilot' },
    ]
} */
const data = JSON.parse(jsonString);
console.log('data', data);
const list = data.list;
console.log('list', list);

const result = {
    list: [
        {name: list[0].name,
        age: list[0].age,
        prof: list[0].prof},
        {name: list[1].name,
        age: list[1].age,
        prof: list[1].prof}
    ]
};
console.log('result', result);
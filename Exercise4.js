/*Создать Promise, в котором c задержкой в три секунды сгенерировать случайное целое число от 1 до 100.
 Для создания задержки использовать setTimeout. Если сгенерированное число четное — Promise выполнится успешно (resolve),
 если нечетное — выполнится с ошибкой (reject). После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:

«Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
«Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число */

function x() {
   let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
         let number = Math.floor(Math.random()*100);
         if ( number%2 == 0 ) resolve(console.log(`Завершено успешно. Сгенерированное число — ${number}`));
         else reject( console.log(`Завершено с ошибкой. Сгенерированное число — ${number}`));
      }, 3000);
   });
   return promise;
}

x().then(function(result) {
   console.log(result); // --> 'done!'
});

x().catch(function(error) {
   console.log(error); // --> 'error!'
});
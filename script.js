// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции.При копировании
// массива – функция применяется к каждому элементу копируемого массива.

//     newList = copy(list, function (value) { return value * 10; })


const color = ["white", "black", "red"];

function copy(list, value) {
    if (!value) {
        return list.slice();
    } else {
         let arr = [];
        for (i = 0; i < value.length; i++) {
           arr.push(value[i]);
        }
        return arr;
    }
}

let newList = copy(color, color);

console.log(newList);



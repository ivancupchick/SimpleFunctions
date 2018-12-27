
// functions
function isPrime(figure) {
    if (figure == 1 || figure <= 0) {
        return false;
    } else {
        for (let i = 2; i < figure; i++) {
            if (figure%i == 0) {
                return false;
            } else if (i==figure-1){
                return true;
            } else {
                continue;
            }
        }
    }
    return true;
}
/*
alert("0 "+isPrime(0));
alert("1 "+isPrime(1));
alert("2 "+isPrime(2));
alert("3 "+isPrime(3));
alert("7 "+isPrime(7));
alert("49 "+isPrime(49));
alert("103 "+isPrime(103)); 
*/
factorial = function f(figure){
    if (figure == 0) {
        return 1
    }
    return figure==1 ? 1 : figure*f(figure-1);
}
/*
alert('Факторил 1 = '+factorial(1));
alert('Факторил 2 = '+factorial(2));
alert('Факторил 3 = '+factorial(3));
alert('Факторил 4 = '+factorial(4));
alert('Факторил 0 = '+factorial(0));
*/
function fib(figure) {
    if (figure <= 0) {
        return 0;
    } else if (figure == 1) {
        return 1;
    } else if (figure > 1) {
        let arrayFib = [];
        arrayFib[0] = 1;
        arrayFib[1] = 1;
        arrayFib[2] = 2;
        for (let i = 2; i < figure; i++) {
            arrayFib[i] = arrayFib[i-1] + arrayFib[i-2];
        }
        return arrayFib[figure-1];
    }
}
/*
alert('ноль ' + fib(0));
alert('1-ое = ' + fib(1));
alert('2-ое = ' + fib(2));
alert('3-е = ' + fib(3));
alert('4-ое = ' + fib(4));
alert('5-ое = ' + fib(5));
*/
function isSorted(array) {
    if (array[0] == undefined) {
        return true;
    } else {
        for (let i = 1; i < array.length; i++) {
           if (array[i]<array[i-1]) {
            return false;
           }
        }
    }
    return true;
}
/*
var testArray1 = [];
var testArray2 = [1];
var testArray3 = [3, 2, 1];
var testArray4 = [1, 2, 3];
alert('Пустой - ' + isSorted(testArray1));
alert('Содержащий одну цифру - ' + isSorted(testArray2));
alert('Неправильный - ' + isSorted(testArray3));
alert('Правильный - ' + isSorted(testArray4));
*/

function filter(array, funFilter) {
    let arrayAfterFilter = []
    for (let i = 0; i < array.length; i++) {
            if (funFilter(array[i])) {
            arrayAfterFilter.push(array[i])
        }
    }
    return arrayAfterFilter;
}
/*
var testArray1 = [3, 2, 1];
var testArray2 = [1, 2, 3];
alert(filter(testArray1, n => n < 3));
alert(filter(testArray2, n => n == 3));
*/
function reduce(array, funReduce, figure) {
    for (let i = 0; i < array.length; i++) {
        figure = funReduce(figure, array[i], i, array);
    }
    return figure;
}
/*
alert(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
*/
function reverse(text) {
    let textAfterFunction = '';
    for (let i = text.length - 1; i > -1; i--) {
        textAfterFunction += text[i];
    }
    return textAfterFunction;
}
/*
alert(reverse('')); 
alert(reverse('abc')); 
*/
function indexOf(array, valueNeed) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == valueNeed) {
            return i;
        }
    }
    return -1;
}
/*
alert(indexOf([1,2,3], 3));
alert(indexOf([1,2,3], 4));
*/
/*function printText() {
    document.write("Hello, world!");
};

printText();*/

/*// Задача: написать рекурсию
function my_func(n) {
    if (n == 1) {
        return (n);
    }
    return (my_func(n - 1) + " " + n);
}

console.log(my_func(5));*/


var textString = "Hello, world!";
console.log(textString.toUpperCase());
console.log(textString.length);

function Person (name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;
    return (name + " " + age + " " + year);
}

console.log(Person("Ivan", 14, 1999));

// Hoist Practice Assignment
// Practice #1
console.log(hello);                                   
var hello = 'world';                                 
// expected output: undefined

// Practice #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}                          
// expected output:
// var needle = 'haystack';
// calls the test function and console logs magnet
// function is stated here

// Practice #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// expected output:
// var brendan = 'super cool';
// super cool

// Practice #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// expected output:
// var food = 'chicken';
// chicken
// calls the eat function and console logs half-chicken

// Practice #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
// console.log(food);
// expected output:
// mean() is not idenitifed yet because of console.log so it doesn't run.

// Practice #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// expected output: 
// var genre;
// console.log(genre): genre is undefined
// run rewind function, console logs rock and r&b
// console logs disco

// Practice #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// expected output: 
// dojo syntax error
// console.log(dojo) - dojo is undefined
// function won't run due to synax error

// Practice #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// expected output: 
// { name: Chicago, students: 65, hiring: true}
// cannot reassignment dojo when it's a const variable


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Fred', last: 'Durst', year: 1980, passed: 2019 },
    { first: 'Michael', last: 'Jackson', year: 1973, passed: 2016 },
    { first: 'Scott', last: 'Stewart', year: 1982, passed: 2012 },
    { first: 'Henry', last: 'Ford', year: 1932, passed: 1979 },
    { first: 'Kid', last: 'Rock', year: 1962, passed: 2000 },
];


// 1. Filter the list of inventors who were born in 1900s
younginventors = inventors.filter( (x) => {if(x.passed < 2000) {return x.first + ' '+ x.last}});
//2. Give us an array of the inventory of first and last names
namesofinventors = inventors.map( (x) =>{return x.first+' '+x.last});
//3. Sort the inventors by birthdate, oldest to youngest
birthdays = inventors.sort( (x,b) =>{return x.year > b.year});
//4. How many years did all the inventors live

yearslived = inventors.reduce((x,y)=>{return x + (y.passed - y.year)},0) 
console.log('1. Filter the list of inventors who were born in 1900s');
console.log(JSON.stringify(younginventors));
console.log('2. Give us an array of the inventory of first and last names');
console.log(namesofinventors);
console.log('2. Sort the inventors by birthdate, oldest to youngest');
console.log(JSON.stringify(birthdays));
console.log('2. Sort the inventors by birthdate, oldest to youngest');
console.log(yearslived);

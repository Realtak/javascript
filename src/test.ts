// console.log(1+'1');

// var num = 1;
// var num2 = 3;
// console.log(num + num2);


// var num3: number;
// num3 = 3;

var n: number = 3;
var f: number = 3.2;
var s: string = 'abc';
var b: boolean = true;

function test(): number {
    return 1;
}

function test1(): void {
    // return 2;  => error// void returns nothing
}

var t1: number = test();
var t2: any = test1();

var n1: number = 3;
var n2: number = 2;
var result: number = 0;
result = n1 + n2;
console.log(n1 + "+" + n2 + "=" + result);
result = n1 - n2;
console.log(n1 + "-" + n2 + "=" + result);
result = n1 / n2;
console.log(n1 + "/" + n2 + "=" + result);
result = n1 * n2;
console.log(n1 + "*" + n2 + "=" + result);

n1++;
console.log('n1++' + n1);

n1--;
console.log('n1--' + n1);

n1 += 1;
console.log('n1+=' + n1);
n1 -= 1;
console.log('n1-=' + n1);

if (1 === '1') { //== , === 차이 알아두기
    console.log('1과 \'1\'은 같습니다')
} else {
    console.log('1과 \'1\'은 다릅니다');
}

var age: number = 20;

console.log('age == 20' + (age == 20));
console.log('age != 20' + (age != 20));
console.log('age >= 20' + (age >= 20));
console.log('age <= 20' + (age <= 20));
console.log('age > 20' + (age > 20));
console.log('age < 20' + (age < 20));

var age1 = 10;
console.log(age == 20 || age1 == 20);
console.log(age == 20 && age1 == 20);

for (var idx = 1; idx < 10; idx++) {
    if (idx % 2 == 0) {
        console.log(idx);
    }
}

//xml, json 서로 데이터를 담을수 있는 크기가 다름.

var arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr[0]);
console.log(arr.length);

for(var idx = 0 ; idx< arr.length; idx ++){
    console.log(arr[idx]);
}
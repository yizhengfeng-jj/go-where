import * as _ from 'lodash';
console.log(_.chunk([2]));
console.log('lodash');
interface test {
    name:string,
    age:number
}

function init(obj:test) {
    console.log(obj.name + obj.age)
}

init({name:"json",age:21})
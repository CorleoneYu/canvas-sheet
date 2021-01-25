import 'reflect-metadata';

function logParameter(
    target: Object,
    propertyName: string,
    index: number
) {
    console.log('log', propertyName, index);
}

class Person {
    msg: string;
    constructor(@logParameter message: string) {
        this.msg = message;
    }
}

const person = new Person('aaa');
export default person;

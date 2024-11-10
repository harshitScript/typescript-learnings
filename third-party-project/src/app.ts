import 'reflect-metadata'; //? should only be kept in root file
import { plainToClass } from 'class-transformer';
import _ from 'lodash';
import Product from './proudct.model';


function mergeObject<T extends object>(arg1: T, arg2: T) {
    return _.merge(arg1, arg2)
}

console.log(mergeObject({ name: 'Harshit' }, { age: 4 }))


//* Class Transformer Example.
const products = [{ title: 'Bike', price: 1200 }, { title: 'PS5', price: 300 }]; //? data Recieved from a remote server 
//! products[0].getInfomration()  Not the instance of Product class.
const milk = new Product('Milk', 60);
console.log(milk.getInformation())
//? converting all the JSON data to the instance of Product class.
const productInstanceArray = plainToClass(Product, products);
console.log(productInstanceArray[0].getInformation()) //? Product[]

//* Class Validator Example.
import { validate } from "class-validator"
const bike = new Product('Pulsor', 400000);
validate(bike).then((res) => {
    if (res.length > 0) {
        console.log('validation Errors Exists.')
    }
    console.log(res)
});


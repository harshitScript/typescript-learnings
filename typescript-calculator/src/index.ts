const display = document.querySelector('#display')!;
const allClearButton = document.querySelector('#AC')!;
const clearButton = document.querySelector('#C')!;
const zeroButton = document.querySelector('#zero')!;
const oneButton = document.querySelector('#one')!;
const twoButton = document.querySelector('#two')!;
const threeButton = document.querySelector('#three')!;
const fourButton = document.querySelector('#four')!;
const fiveButton = document.querySelector('#five')!;
const sixButton = document.querySelector('#six')!;
const sevenButton = document.querySelector('#seven')!;
const eightButton = document.querySelector('#eight')!;
const nineButton = document.querySelector('#nine')!;
const plusButton = document.querySelector('#plus')!;
const minusButton = document.querySelector('#minus')!;
const multiplyButton = document.querySelector('#multiply')!;
const divideButton = document.querySelector('#divide')!;
const openBracketButton = document.querySelector('#open-bracket')!;
const closeBracketButton = document.querySelector('#close-bracket')!;
const equalsToButton = document.querySelector('#equals-to')!;

//? Assigning a string value to display.
display.innerHTML = ''

allClearButton.addEventListener('click', () => {
    display.innerHTML = ''
})
clearButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML.slice(0, -1)
})
zeroButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 0
})
oneButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 1
})
twoButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 2
})
threeButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 3
})
fourButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 4
})
fiveButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 5
})
sixButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 6
})
sevenButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 7
})
eightButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 8
})
nineButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 9
})
plusButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '+'
})
minusButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '-'
})
multiplyButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '*'
})
divideButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '/'
})
openBracketButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '('
})
closeBracketButton.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + ')'
})
equalsToButton.addEventListener('click', () => {
    let evalString: string;
    let result: number;
    evalString = display.innerHTML;
    result = eval(evalString);
    display.innerHTML = result.toString();
})
console.log(typeof String);
console.log(typeof String);
console.log(typeof Object);

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

console.log('escola coder'.reverse());
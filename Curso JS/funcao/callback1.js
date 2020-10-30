const factory = ['Mercedes', 'Audi', 'BMW'];

function print(name, indice) {
    console.log(`${indice + 1}. ${name}`);
}

factory.forEach(print);
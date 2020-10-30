let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj); // saindo do escopo global e apontando para obj
comparaComThis(global);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
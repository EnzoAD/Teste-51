function testeArray() {
    const obj = [
        { "nome": "Jonas", "idade": 20 },
        { "nome": "Maria", "idade": 30 },
    ];

    for (let i = 0; i < obj.length; i++) {
        console.log(obj[i].nome + ': ' + obj[i].idade);
    }

    console.log(obj);

};

export default testeArray;
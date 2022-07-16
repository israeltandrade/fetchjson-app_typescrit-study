import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// Módulo axios usa método get para buscar informações na url.
// Na sequência, assim que a promise é cumprida, então (then) vem
// a resposta (response) do módulo axios, passada como parâmetro
// da arrow function, que resulta num console.log.
axios.get(url).then(response => {
    console.log(response.data);
});
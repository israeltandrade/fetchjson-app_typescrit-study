import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// A interface a seguir permite perceber os erros durante o desenvolvimento:
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    // Associação da resposta com a interface Todo:
    const todo = response.data as Todo;

    // Os dados vem undefined porque o nome das propriedades está com case sensitive errors.
    // Agora que a interface está associada, a IDE aponta os problemas com as propriedades. 
    // const ID = todo.ID;
    // const title = todo.Title;
    // const finished = todo.finished;

    // console.log(`
    // The Todo with ID: ${ID}
    // Has a title of: ${title}
    // Is it finished? ${finished}
    // `);

    // Código reformulado em face das informações da interface.
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
    `);

});
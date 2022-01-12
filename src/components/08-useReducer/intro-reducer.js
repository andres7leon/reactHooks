const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action) => {

    if ( action?.type === 'agregar' ) {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Comprar Lechee',
    done: false
}

const actionAddProduct = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, actionAddProduct);


console.log(todos)
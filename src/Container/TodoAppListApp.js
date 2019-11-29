import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Component/todos/Todo';

const mapStateToprops = state=>{
    return {
        todoList: state.countReducer.count
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        addTodo:()=>{dispatch({type:'increase'})},
        deleteTodo:()=>{dispatch({type: 'decrease' })},
    }
};

const TodoApp = connect(mapStateToprops, mapDispatchToProps)(Todo);

export default TodoApp;

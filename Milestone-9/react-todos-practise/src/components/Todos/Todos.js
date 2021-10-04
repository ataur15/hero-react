import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, []);

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                todos.map(todo => <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}>
                </Todo>)
            }
        </Grid>
    );
};

export default Todos;
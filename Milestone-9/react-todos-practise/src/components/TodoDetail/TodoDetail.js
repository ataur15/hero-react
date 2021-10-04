import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import { RingContext } from '../../App';

const TodoDetail = () => {
    const [todoDetail, setTodoDetail] = useState({});
    const [condition, setCondition] = useState(false);

    const { id, title } = todoDetail;

    let { todoId } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(res => res.json())
            .then(data => setTodoDetail(data))
    }, []);

    const history = useHistory();
    const handleClick = () => {
        history.push(`/todos`);
    }

    const ornaments = useContext(RingContext);
    // console.log(ornaments);

    return (
        <Card sx={{ width: 600, mx: "auto" }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {id} {title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    {condition ? ornaments : 'Gold Ring'}
                </Typography>
                <p>Toggle: {condition.toString()}</p>
            </CardContent>
            <CardActions>
                <Button onClick={handleClick} size="small">Back</Button>
                <Button onClick={() => setCondition(!condition)} size="small">Click</Button>
            </CardActions>
        </Card>
    );
};

export default TodoDetail;
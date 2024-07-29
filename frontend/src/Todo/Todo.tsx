import React from 'react';

interface Todo {
    id: number;
    title: string;
    description: string;
}

const TodoComponent = (props: Todo) => {
    const {id, title, description} = props;

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <span>{id}</span>
            <span>{title}</span>
            <span>{description}</span>
        </div>
    );
};

export {
    Todo,
    TodoComponent
};

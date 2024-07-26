interface TodoProps {
    id: number;
    title: string;
    description: string;
}

const Todo = (props: TodoProps) => {
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
    Todo
};

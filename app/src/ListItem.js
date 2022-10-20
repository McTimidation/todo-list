import InputForm from "./input";

function ListItem({ task }) {
    
    return (
        <div className={task.complete ? 'strike' : ''}>
            {task.task}
            </div>
    )
}

export default ListItem;
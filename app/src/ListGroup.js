import ListItem from './ListItem';
import InputForm from './input';

function ListGroup({ toDoList }) {
console.log(toDoList, 'ListGroup')
    return (
        <div>
            {toDoList.map(task => {
                return (
                    
                    <ListItem key={task.id} task={task.task} />
                )
            })}
            
        </div>
    )
}

export default ListGroup;
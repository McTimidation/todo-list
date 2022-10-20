import ListItem from './ListItem';
import InputForm from './input';

function ListGroup(props) {

    return (
        <div>
            {props.toDoList.map(task => {
                return (
                    <ListItem task={task} />
                )
            })}
            
        </div>
    )
}

export default ListGroup;
import ListItem from './ListItem';
import InputForm from './input';

function ListGroup({ toDoList, setToDoList }) {
console.log(toDoList, 'ListGroup')
    return (
        <div>
            {toDoList.map(task => {
                return (
                    
                    <ListItem 
                    setToDoList={setToDoList} 
                    key={task.id} 
                    task={task.task}
                    id={task.id}
                    toDoList={toDoList}
                    complete={task.complete}
                    />
                )
            })}
            
        </div>
    )
}

export default ListGroup;
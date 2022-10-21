import ListItem from './ListItem';


function ListGroup({ setToDoList, toDoList }) {
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
            Total:{toDoList.length}
        </div>
    )
}

export default ListGroup;
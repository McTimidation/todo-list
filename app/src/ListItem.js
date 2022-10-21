

function ListItem({ task, setToDoList, toDoList, id, complete }) {


    function ClickToggle({ id }) {
        // gets id of item clicked pass in
        let toggled = toDoList.map(task => {
            // loops through array and compares clicked id to id of each item in array
        return task.id === id ? { ...task, complete: !task.complete } : { ...task};
        // for the matching id, returns a deconstructed copy of the object with the "complete" boolean value flipped
        // for all other ids simply returns a shallow copy of the object
        
        })
        setToDoList(toggled);
        
}

function RemoveItem({ id }) {
    setToDoList(toDoList.filter(t => 
        t.id !== id
    ))
}





    return (

        <div className={complete ? 'strike' : ''}>
            <input id={id} className="form-check-input" type="checkbox" checked={complete} onChange={(e) => ClickToggle({id})}></input>
            {task} 
            <button type="button" className="btn-close" aria-label="Close" onClick={(e) => RemoveItem({id})}></button>
        </div>
    )

}

export default ListItem;
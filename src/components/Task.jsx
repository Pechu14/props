function Task ({task, borrarTask, marcarTask}) {

    return (
        <>
        <li style={{textDecoration : task.completed ? 'line-through' : 'none'}}
                    onClick={()=>marcarTask(task.id)}
        >
         {task.text}
            <button onClick={(event)=> {event.stopPropagation(); borrarTask(task.id);}}>Borrar</button>

        </li>
        </>
    )
}

export default Task;
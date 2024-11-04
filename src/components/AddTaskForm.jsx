import {useState} from "react";

function AddTaskForm ({añadirTarea}) {
    const [textotarea, setTextoTarea] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(textotarea .trim()) {
            añadirTarea(textotarea);
            setTextoTarea("");
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={textotarea}
                onChange={(event)=> setTextoTarea(event.target.value)}
            />
            <button type="submit">Añadir tarea</button>

        </form>
        </>
    )
}

export default AddTaskForm ;